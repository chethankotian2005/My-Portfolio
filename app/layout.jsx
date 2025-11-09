import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import ThemeScript from '@/components/ThemeScript';

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
          <div className="flex flex-col min-h-screen bg-deep-black">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
