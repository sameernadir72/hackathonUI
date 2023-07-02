import ProductCard from "../../../components/section/ProductCard";
import { products } from "../utils/mock";

const AllProd = () => {
  return (
    <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-14">
      {
        products.map(
          (product,index) => (
            <ProductCard key={index} prop={product} ></ProductCard>
          ))
      }
      </div>
  )
}

export default AllProd
