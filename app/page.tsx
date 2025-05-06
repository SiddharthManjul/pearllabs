import HeroGrid from "../components/custom/hero-grid";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function Home() {
  return (
    <div className="">
      <HeroGrid />
    </div>
  );
}
