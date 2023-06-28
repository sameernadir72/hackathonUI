import { products } from "@/app/utils/mock";
import { ProductView } from "../../../../components/section/ProductView";
import { Product } from "@/app/utils/types";


export default function Page({ params }: { params: { id: number} }) {
    const product:Product = products[params.id-1];
    return (
      <div>
        <ProductView {...product} />
      </div>
  )
}