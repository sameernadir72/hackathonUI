import Image from "next/image";
import ProductCard from "./ProductCard";
import { fetchFeaturedProducts } from "@/app/data";
import { FeaturedData, Product } from "@/app/utils/types";

const Featured = ({ featuredProducts, data }: { featuredProducts: Product[], data: FeaturedData}) => {
  // console.log(featuredProducts[0]);
  return (
    <div className="pt-20 space-y-14 ">
      <div className="flex flex-col justify-center items-center gap-y-2">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm font-bold tracking-wider text-blue-600">
          PRODUCTS
        </p>
        <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-wide transition-colors first:mt-0">
          Check What We Have
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        {featuredProducts.map((product) => (
          <ProductCard prop={product} key={product._rev} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
