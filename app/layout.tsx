import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL("https://khushi-portfolio.dev"),
  title: "Khushi Sharma | Data Analyst & Web Developer Portfolio",
  description:
    "Recruiter-ready portfolio of Khushi Sharma showcasing data analytics dashboards, business insights, SQL/Python projects, and modern web development work.",
  keywords: [
    "Khushi Sharma portfolio",
    "Data Analyst portfolio",
    "Web Developer portfolio",
    "Power BI projects",
    "SQL and Python analytics",
    "Next.js developer",
  ],
  openGraph: {
    title: "Khushi Sharma | Data Analyst & Web Developer Portfolio",
    description:
      "Explore projects, case studies, dashboards, and recruiter-focused experience highlights.",
    url: "https://khushi-portfolio.dev",
    siteName: "Khushi Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Khushi Sharma portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khushi Sharma | Data Analyst & Web Developer",
    description:
      "Professional portfolio with analytics dashboards and web development projects.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}