import ProductCard from "../../../components/section/ProductCard";
import { products } from "../utils/mock";

const AllProd = () => {
  return (
    <div className="grid grid-cols-4  ">
      {
        products.map(
          (product,index) => (
            <ProductCard key={index} prop={product} ></ProductCard>
          )
          )
      }
      </div>
  )
}

export default AllProd;
