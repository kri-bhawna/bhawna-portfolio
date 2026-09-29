import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kumari Bhawna | Data Scientist",
  description:
    "Data scientist and IIT Kharagpur dual-degree Chemical Engineer. Machine learning, optimization, and analytics for lending operations and research.",
  keywords: [
    "Data Scientist",
    "Machine Learning",
    "Business Analyst",
    "IIT Kharagpur",
    "Python",
    "SQL",
    "Kumari Bhawna",
  ],
  authors: [{ name: "Kumari Bhawna" }],
  openGraph: {
    title: "Kumari Bhawna | Data Scientist",
    description:
      "IIT Kharagpur Chemical Engineer building machine-learning and optimization systems.",
    siteName: "Kumari Bhawna",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumari Bhawna | Data Scientist",
    description:
      "IIT Kharagpur Chemical Engineer building machine-learning and optimization systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const portfolioThemeScript = `
(function () {
  try {
    var theme = localStorage.getItem("bhawna-portfolio-theme");
    if (theme !== "light" && theme !== "dark") theme = "dark";
    document.documentElement.setAttribute("data-portfolio-theme", theme);
  } catch (_) {
    document.documentElement.setAttribute("data-portfolio-theme", "dark");
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: portfolioThemeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
