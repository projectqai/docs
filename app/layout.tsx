import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://projectqai.github.io'),
  title: {
    default: 'Hydra Documentation',
    template: '%s | Hydra',
  },
  description: 'Open-source situational awareness machine connecting heterogeneous sensors for time-critical missions',
  openGraph: {
    title: 'Hydra Documentation',
    description: 'Open-source situational awareness machine connecting heterogeneous sensors for time-critical missions',
    url: 'https://projectqai.github.io',
    siteName: 'Hydra',
    images: [
      {
        url: '/hydra-screenshot.png',
        width: 2880,
        height: 1800,
        alt: 'Hydra tactical coordination interface',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hydra Documentation',
    description: 'Open-source situational awareness machine connecting heterogeneous sensors for time-critical missions',
    images: ['/hydra-screenshot.png'],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            enabled: true,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
