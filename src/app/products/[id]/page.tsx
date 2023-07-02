import { products } from "@/app/utils/mock";
import { ProductView } from "../../../../components/section/ProductView";
import { Product } from "@/app/utils/types";
import ProductCard from "../../../../components/section/ProductCard";

const filterProducts = (id:number) => {
  return (products.filter((product) => (
      product.id === id
  )))
}
export default function Page({ params }: { params: { id: number} }) {
    const product:Product = products[params.id-1];
    const filteredProducts = filterProducts(params.id);
    return (

      <div>
        <ProductView {...product} />

    <div >
      <h1 className="font-extrabold"></h1>
      {
        filteredProducts.map((product:Product,index:number) => (
            <ProductCard key={index} prop={product} ></ProductCard>

       
        ))
      }

      </div>
      </div>
  )
}