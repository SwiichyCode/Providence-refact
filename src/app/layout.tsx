import '@/configs/styles/globals.css';

import React from 'react';
import { Oswald } from 'next/font/google';

import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Providence - Guilde PvE HL | World of Warcraft',
  description:
    'Providence, guilde PvE HL sur World of Warcraft, recrute des joueurs pour raids héroïques et mythiques. Rejoignez-nous pour des raids M+ et une progression ambitieuse !',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  authors: [{ name: 'Providence', url: 'https://discord.gg/7653pKkfGU' }],
};

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} font-oswald`}>
      <body>{children}</body>
    </html>
  );
}
