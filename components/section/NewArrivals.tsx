import Image from "next/image";
import { Product } from "@/app/utils/types";
import ProductCard from "./ProductCard";
const NewArrivals = ({ data }: { data: Product[] }) => {
    return (
    <div>
      <div className="flex flex-col ">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm font-bold tracking-wider text-blue-600">
          New Arrivals
        </p>
        <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-wide transition-colors first:mt-0 text-center p-1 sm:text-left">
          Latest Collections
        </h2>
      </div>

      <div className="flex">
        {data.slice(0, 6).map((product) => (
          <ProductCard prop={product} key={product._rev} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
