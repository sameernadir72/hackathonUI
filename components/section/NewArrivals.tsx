import Image from "next/image";
import { Product } from "@/app/utils/types";
import ProductCard from "./ProductCard";
import { Cinzel, Cinzel_Decorative, Lato, Sora } from "next/font/google";
import { lato } from "@/app/layout";

const NewArrivals = ({ data }: { data: Product[] }) => {
  return (
    <div className="space-y-7">
      <div className={`mt-40 flex flex-col ${lato.className} justify-center items-center`}>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm font-bold tracking-wider text-blue-600 ">
          New Arrivals
        </p>
        <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-wide transition-colors first:mt-0 p-1 sm:text-left">
          Latest Collections
        </h2>
      </div>

      <div className="flex flex-wrap gap-x-4">
        {data.slice(0, 6).map((product) => (
          <ProductCard prop={product} key={product._rev} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
