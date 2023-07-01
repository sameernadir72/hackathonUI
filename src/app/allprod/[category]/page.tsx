import { products } from "@/app/utils/mock";
import ProductCard from "../../../../components/section/ProductCard";
import { Product } from "@/app/utils/types";

const filterProducts = (category:string) => {
    return (products.filter((product) => (
        product.category === category
    )))
}
export default function Page({ params }: { params: { category: string } }) {
    const filteredProducts = filterProducts(params.category);
    return (

      <>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
     
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
     
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6 grid grid-cols-4">
      {
          filteredProducts.map((product:Product, index:number) => (
            <ProductCard
              key={index}
              prop={product}
              // id={product.id}
              // title={product.name}
              // category={product.category}
              // price={product.price}
              // image={product.image}
            ></ProductCard>
          ))
        }
      </div>
      
    </div>
  </div>
</section>
  
      </>
  )
}