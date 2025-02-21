import type { Metadata } from "next";
import "../globals.css";
import { Poppins } from "next/font/google";
import { fetchMetaData } from "../utils/methods";
import { foroMD } from "../utils/constants";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export async function generateMetadata({ params }: any) {
  const metaData = await fetchMetaData(foroMD);
  return metaData;
}

//Add google fonts gotham

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
