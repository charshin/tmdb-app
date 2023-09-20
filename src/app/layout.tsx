import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Body } from './components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TMDB App',
  description: 'Browse movies from TMDB',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Body>{children}</Body>
      </body>
    </html>
  );
}
