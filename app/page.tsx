import { RetroGrid } from "@/components/magicui/retro-grid";
import { CustomOrbit } from "@/components/custom/custom-orbit";
import { File, Settings } from "lucide-react";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <RetroGrid />

      {/* Hero section content */}
      <div className="relative z-10 flex h-full w-full items-center">
        {/* Left side content */}
        <div className="pl-20 pb-40 w-full">
          <h1 className="text-4xl font-bold">PEARL Labs</h1>
          <p className="mt-4 text-lg">
            Ekdum mast tagline dene ka, ye baburao ka style h. Paisa he paisa
            hoga, hehehe!
          </p>
        </div>

        {/* Right side with the orbit circle */}
        <div className="relative overflow-hidden h-[80%] w-[80%] right-4 bottom-16 pl-4 bg-[#7F8487] pt-14 rounded-xl">
          <CustomOrbit>
            <File />
            <Settings />
            <File />
          </CustomOrbit>
        </div>
      </div>
    </div>
  );
}
