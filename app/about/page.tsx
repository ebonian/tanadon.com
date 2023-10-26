import Image from "next/image";
import MeImage from "@/public/me.jpg";

export default function About(): JSX.Element {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="relative rounded-[80px] w-52 overflow-hidden aspect-square bg-white/10">
        <Image
          alt="Poon Picture"
          className="rounded-[80px] overflow-hidden p-2"
          fill
          objectFit="cover"
          objectPosition="top"
          src={MeImage}
        />
      </div>
    </div>
  );
}
