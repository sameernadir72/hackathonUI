import ProductCard from "../../../components/section/ProductCard";
import { products } from "../utils/mock";

const AllProd = () => {
  return (
    <div className="grid  sm:grid-cols-1 md:grid-cols-4 ">
      {
        products.map(
          (product,index) => (
            <ProductCard key={index} id={product.id} title={product.name} category={product.category} price={product.price} image={product.image} ></ProductCard>
          )
          )
      }
      </div>
  )
}

export default AllProd;
