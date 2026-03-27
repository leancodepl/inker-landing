import { Inter } from 'next/font/google';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Inker — The Tattoo Industry. Connected.',
  description:
    'Inker is the platform built for tattoo artists and collectors. Discover artists. Book tattoos. Explore conventions. Find jobs. Connect with the global tattoo community.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.variable} lang="en">
      <body>{children}</body>
    </html>
  );
}
