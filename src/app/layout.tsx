import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { montserrat } from "@/components/ui/fonts";
import "../styles/globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/footer";


export const metadata: Metadata = {
  title: "MindStack",
  description: "Lista de todos los comandos de React js",
  openGraph: {
    title: "MindStack",
    description: "Lista de todos los comandos de React js",
    url: "https://mindstack.com",
    siteName: "MindStack",
    locale: "es_ES",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.className}  antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
