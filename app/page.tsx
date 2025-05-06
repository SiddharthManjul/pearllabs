import { RetroGrid } from "@/components/magicui/retro-grid";

import { Montserrat, Space_Grotesk } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <RetroGrid />

      {/* Hero section content */}
      <div className="relative z-10 flex h-full w-full items-center">
        {/* Left side content */}
        <div className="pl-20 pb-40 w-full">
          <h1 className={`text-4xl font-bold ${spaceGrotesk.className}`}>
            PEARL Labs
          </h1>
          <p className={`mt-4 text-lg ${montserrat.className}`}>
            Ekdum mast tagline dene ka, ye baburao ka style h. Paisa he paisa
            hoga, hehehe!
          </p>
        </div>

        {/* Right side with the orbit circle */}
        <div className="relative overflow-hidden h-[95%] w-[80%] right-4 pl-4 bg-[#7F8487] my-4 rounded-xl"></div>
      </div>
    </div>
  );
}
