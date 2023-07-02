import Image from "next/image";
import ProductCard from "./ProductCard";
import { products } from "@/app/utils/mock";

const Products = () => {
    const p1 = products[6]; 
    const p2 = products[4]; 
    const p3 = products[3]; 
    return(
        <div className="pt-20 space-y-14">
            <div className="flex flex-col justify-center items-center gap-y-2">
             <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm font-bold tracking-wider text-blue-600">PRODUCTS</p>
             <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-wide transition-colors first:mt-0">
             Check What We Have
            </h2>
            </div>
            <div className="flex justify-center items-center">
                <ProductCard prop={p1}></ProductCard>
                <ProductCard prop={p2}></ProductCard>
                <ProductCard prop={p3}></ProductCard>
            </div>
        </div>
)
}

export default Products;