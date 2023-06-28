import { products } from "@/app/utils/mock";
import ProductCard from "../../../../components/section/ProductCard";

const filterProducts = (id:number) => {
    return (products.filter((product) => (
        product.id === id
    )))
}
export default function Page({ params }: { params: { id: number} }) {
    const filteredProducts = filterProducts(params.id);
    return (
    <div className="grid grid-cols-4 px-20 mx-auto">
      <h1 className="font-extrabold">{params.id}</h1>
      {
        filteredProducts.map((product,index) => (
            <ProductCard key={index} id={product.id} title={product.name} category={product.category}
            price={product.price} image={product.image} ></ProductCard>
        ))
      }
      </div>
  )
}