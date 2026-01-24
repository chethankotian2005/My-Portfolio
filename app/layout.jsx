import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import ThemeScript from '@/components/ThemeScript';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingContact from '@/components/FloatingContact';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chethan V Kotian - AI & Mobile Developer',
  description: 'Portfolio of Chethan V Kotian, a passionate AI & Mobile Developer and hackathon enthusiast. Explore my projects, skills, and experience in building innovative solutions.',
  keywords: 'Chethan V Kotian, AI Developer, Mobile Developer, Android Developer, Hackathon, Portfolio, Web Developer, SMVITM',
  authors: [{ name: 'Chethan V Kotian' }],
  openGraph: {
    title: 'Chethan V Kotian - AI & Mobile Developer',
    description: 'Portfolio showcasing innovative projects in AI, mobile, and web development',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('portfolio-theme') || 'dark';
                const html = document.documentElement;
                if (theme === 'dark') {
                  html.classList.remove('light');
                  html.classList.add('dark');
                } else {
                  html.classList.remove('dark');
                  html.classList.add('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <ThemeScript />
          <ScrollProgress />
          <ScrollToTop />
          <FloatingContact />
          <div className="flex flex-col min-h-screen bg-deep-black" style={{ position: 'relative' }}>
            <Navbar />
            <main className="flex-grow" style={{ overflow: 'visible', position: 'relative' }}>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
