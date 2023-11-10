import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Featured1 from "../../public/Featured1.webp";
import Featured2 from "../../public/Featured2.webp";
import Featured3 from "../../public/Featured3.webp";
import Featured4 from "../../public/Featured4.webp";
import Link from "next/link";
import { HeroSecData } from "@/app/utils/types";
import { Badge } from "components/ui/badge";
import { Lato, Roboto, Sora } from "next/font/google";
import "@/app/globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: "900",
});

const lato_light = Lato({
  subsets: ["latin"],
  weight: "400",
});

const Hero = ({ data }: { data: HeroSecData }) => {
  return (
    <main className="grid grid-cols-2">
      <div
        className={`mt-28 space-y-9 flex flex-col items-center sm:items-start`}
      >
        <Badge
          variant={"default"}
          className={`cursor-text text-sm p-2 px-7 bg-blue-100 text-blue-700 font-bold rounded-lg ${lato.className}`}
        >
          Sale 70%
        </Badge>
        <p
          className={`max-w-md text-6xl text-center sm:text-left font-extrabold sm:text-5xl text-slate-900 dark:text-white tracking-wider ${lato.className}`}
        >
          An Industrial Take on Streetwear
        </p>
        <p
          className={`max-w-md text-1xl text-center sm:text-left mt-4  text-slate-700 dark:text-slate-400 ${lato_light.className}`}
        >
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <div>
          <Link href="/shop">
            <Button
              className={`bg-black py-7 sm:text-left ${lato_light.className}`}
            >
              <ShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
            </Button>
          </Link>
        </div>
        <div className="flex flex-col flex-shrink  space-x-3  sm:flex-row space-y-2">
          <Image src={Featured1} alt="Featured1"></Image>
          <Image src={Featured2} alt="Featured2"></Image>
          <Image src={Featured3} alt="Featured3"></Image>
          <Image src={Featured4} alt="Featured4"></Image>
        </div>
      </div>
      <div className="ml-48 bg-orange-50 rounded-full w-3/4 flex justify-center w-full">
        <Image
          src="/hero.png"
          alt="hero image"
          width={500}
          height={500}
        ></Image>
      </div>
    </main>
  );
};

export default Hero;
