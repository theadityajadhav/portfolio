import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "./design.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "./site";

const title = "Aditya Jadhav | Data Analyst";
const description =
  "Data analyst from Maharashtra, India. I turn messy data into decisions with SQL, Excel, Power BI and Python. See my projects, skills and resume.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  authors: [{ name: "Aditya Jadhav" }],
  keywords: ["Aditya Jadhav", "Data Analyst", "SQL", "Power BI", "Excel", "Python", "Portfolio", "Maharashtra", "India"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Aditya Jadhav",
    title,
    description: "I turn messy data into decisions. Projects in SQL, Excel, Power BI and Python.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aditya Jadhav, Data Analyst" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "I turn messy data into decisions. Projects in SQL, Excel, Power BI and Python.",
    images: ["/og.png"],
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }], apple: "/apple-touch-icon.png" },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#06142B", width: "device-width", initialScale: 1 };

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aditya Jadhav",
  jobTitle: "Data Analyst",
  url: SITE_URL,
  email: "mailto:corp.adi07@gmail.com",
  address: { "@type": "PostalAddress", addressRegion: "Maharashtra", addressCountry: "IN" },
  alumniOf: "D.Y. Patil College of Engineering & Technology",
  knowsAbout: ["SQL", "MySQL", "Excel", "Power BI", "DAX", "Power Query", "Python", "pandas", "Data analysis"],
  sameAs: ["https://linkedin.com/in/aditya-jadhav-tech", "https://github.com/theadityajadhav"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
