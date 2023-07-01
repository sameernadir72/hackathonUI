import ProductCard from "../../../components/section/ProductCard";
import { products } from "../utils/mock";

const AllProd = () => {
  return (
    <div className="grid  sm:grid-cols-1 md:grid-cols-4 ">
      {
        products.map(
          (product,index) => (
            <ProductCard prop={product} ></ProductCard>
          )
          )
      }
      </div>
  )
}

export default AllProd;