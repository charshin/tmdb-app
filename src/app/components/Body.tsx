'use client';

import { LayoutGroup, motion } from 'framer-motion';

import Banner from './Banner';

export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <LayoutGroup>
      <Banner />
      <motion.div layout>{children}</motion.div>
    </LayoutGroup>
  );
}
