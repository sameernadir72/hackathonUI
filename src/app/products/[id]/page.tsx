import { products } from "@/app/utils/mock";
import { ProductView } from "../../../../components/section/ProductView";
import { Product } from "@/app/utils/types";


export default function Page({ params }: { params: { id: number} }) {
    const product:Product = products[params.id-1];
    return (

      <div>
        <ProductView {...product} />

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