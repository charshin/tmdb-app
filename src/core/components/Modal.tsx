'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

import { AnimatePresence, MotionDiv } from '@/core/lib/motion';

export default function Modal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    setMounted(true);
  }, []);

  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setShowContent(true);
  }, []);

  const router = useRouter();
  const dismiss = useCallback(() => {
    setShowContent(false);
    setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
      router.back();
    }, 250);
  }, [router]);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && dismiss();
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dismiss]);

  return mounted
    ? createPortal(
        <div className="fixed inset-0 h-screen w-screen bg-black/60" onClick={dismiss}>
          <div
            className="absolute left-1/2 top-1/2 -mr-[50%] -translate-x-1/2 -translate-y-1/2"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <AnimatePresence>
              {showContent && (
                <MotionDiv
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="bg-white p-6 md:max-w-[calc(100vw-50px)] md:rounded-md lg:max-w-[calc(100vw-100px)] lg:rounded-lg"
                >
                  {children}
                </MotionDiv>
              )}
            </AnimatePresence>
          </div>
        </div>,
        document.body,
      )
    : null;
}
