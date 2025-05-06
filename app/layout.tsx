import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({subsets: ["latin"] });
import './globals.css';
import Navbar from '../components/navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PEARL LABS - Cryptography fuels the next Internet',
  description: 'Research team working in Blockchain, AI and Cryptography',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}