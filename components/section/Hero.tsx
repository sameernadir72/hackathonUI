import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Featured1 from  "../../public/Featured1.webp"
import Featured2 from  "../../public/Featured2.webp"
import Featured3 from  "../../public/Featured3.webp"
import Featured4 from  "../../public/Featured4.webp"
import Link from "next/link";

const Hero = () => {
  return (

    <main className="max-w-5xl mx-auto ">

    <section className="flex flex-col-reverse justify-center items-center gap-8 sm:flex-row mb-12 p-6">
    <article className="w-1/2">
    <div className=" mt-16 space-y-9 flex flex-col items-center sm:items-start">
    <Button className="cursor-text text-base p-4 px-7 bg-blue-100 text-blue-700 font-bold " variant="secondary">Sale 70%</Button>
      <h1 className="max-w-md text-4xl text-center sm:text-left font-bold sm:text-5xl text-slate-900 dark:text-white">

        An Industrial Take on Streetwear
      </h1>
      <p className="max-w-md text-1xl text-center sm:text-left mt-4  text-slate-700 dark:text-slate-400  ">
        Anyone can beat you but no one can beat your outfit as long as you wear
        Dine outfits.
      </p>
      <div>

      <Link href="/allprod">
      <Button  className="bg-black py-7   sm:text-left" >
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
    </article>
    <div className="bg-orange-50  rounded-full w-1/2 flex  justify-center">
    <Image  src="/hero.png" alt="hero image" width={325} height={150} ></Image>
    </div>
    </section>
    </main>
  );
};

export default Hero;