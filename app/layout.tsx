import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://khushi-portfolio.dev'),
  title: 'Khushi Sharma | Data Analyst & Web Developer',
  description:
    'Professional portfolio of Khushi Sharma, Data Analyst and Web Developer creating data-driven solutions and modern web applications.',
  keywords: [
    'Khushi Sharma',
    'Data Analyst',
    'Web Developer',
    'Power BI',
    'Next.js portfolio'
  ],
  openGraph: {
    title: 'Khushi Sharma | Data Analyst & Web Developer',
    description:
      'Explore projects, experience, and skills in analytics and web development.',
    url: 'https://khushi-portfolio.dev',
    siteName: 'Khushi Portfolio',
    type: 'website'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
