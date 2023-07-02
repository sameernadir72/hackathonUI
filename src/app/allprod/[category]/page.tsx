import { products } from "@/app/utils/mock";
import ProductCard from "../../../../components/section/ProductCard";

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

      <div className="grid  sm: grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
      {
          filteredProducts.map((product, index) => (
            <ProductCard
              key={index}

              prop={product}

            ></ProductCard>
          ))
        }
      </div>

      
 
  </div>
</section>
  
      </>
  )
}