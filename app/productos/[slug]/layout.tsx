import type { Metadata } from "next";
import "../../globals.css";
import { Poppins } from "next/font/google";
import { fetchMetaData } from "@/app/utils/methods";
import { detallesProductosMD } from "@/app/utils/constants";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export async function generateMetadata({ params }: any) {
  const metaData = await fetchMetaData(detallesProductosMD);
  return metaData;
}

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
