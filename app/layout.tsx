import type { Metadata } from "next";
import "./globals.css";

import { Montserrat, Space_Grotesk } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const spaceGrotesk = Space_Grotesk({subsets: ["latin"] });


export const metadata: Metadata = {
  title: "P.E.A.R.L. Labs",
  description: "A place for all your P.E.A.R.L. needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
