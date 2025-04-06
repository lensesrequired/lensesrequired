import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.scss';

const josefinSans = Josefin_Sans({
  variable: '--font-josefin-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Anna Marek-Loew',
  description: 'Personal Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className}`}>{children}</body>
    </html>
  );
}
