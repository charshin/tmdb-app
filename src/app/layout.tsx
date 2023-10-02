import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { LayoutGroup, MotionDiv } from '@/core/lib/motion';

import Banner from './components/Banner';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TMDB App',
  description: 'Browse movies from TMDB',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen pb-14">
          <LayoutGroup>
            <Banner />
            <MotionDiv layout className="p-10">
              {children}
            </MotionDiv>
            <MotionDiv
              layout
              className="absolute bottom-0 flex h-14 w-full items-center justify-center"
            >
              <Footer />
            </MotionDiv>
          </LayoutGroup>
        </div>
      </body>
    </html>
  );
}
