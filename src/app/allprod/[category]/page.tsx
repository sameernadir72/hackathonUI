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

    <div className="grid grid-cols-4">

      {
        filteredProducts.map((product,index) => (
            <ProductCard key={index} id={product.id} title={product.name} category={product.category}
            price={product.price} image={product.image} ></ProductCard>
        ))
      }
      </div>
  )
}