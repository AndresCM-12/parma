import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const undergrowth = localFont({
  src: [
    {
      path: "../public/fonts/Undergrow.ttf",
      weight: "400",
    },
  ],
  variable: "--font-undergrow",
});

export const metadata: Metadata = {
  title: "Parma",
  description: "Marca premium de Sabori",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${undergrowth.variable} ${poppins}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
