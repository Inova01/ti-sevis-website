import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ti-sevis-haiti.innova10.chatgpt.site'),
  title: 'Ti Sèvis — Le petit service qui simplifie votre quotidien',
  description:
    'Trouvez des prestataires de confiance en Haïti pour vos services du quotidien.',
  openGraph: {
    title: 'Ti Sèvis — Un petit service. Une grande différence.',
    description:
      'Les services du quotidien, à portée de main. Une plateforme pensée et construite pour Haïti.',
    url: 'https://ti-sevis-haiti.innova10.chatgpt.site',
    siteName: 'Ti Sèvis',
    locale: 'fr_HT',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Ti Sèvis — Les services du quotidien à portée de main' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ti Sèvis — Un petit service. Une grande différence.',
    description: 'Les services du quotidien, à portée de main.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
