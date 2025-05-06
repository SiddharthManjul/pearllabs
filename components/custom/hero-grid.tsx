import Image from "next/image";

export default function HeroGrid() {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src="/pearl-github.png"
        alt="Pearl Labs Logo"
        fill
        style={{ objectFit: "cover", opacity: 0.4 }}
        priority
      />
    </div>
  );
}

