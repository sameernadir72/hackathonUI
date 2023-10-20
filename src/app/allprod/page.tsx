import ProductCard from "../../../components/section/ProductCard";
import { client } from "../utils/sanity-client";
import { Product } from "../utils/types";

const AllProd = async () => {

  const products: Product[] = await client.fetch({
    query: `*[_type == "product"]{
    _rev,
      images,
      main_image,
      category,
      size,
      description,
      name,
      price,    
  }`,
  });
  console.log(products)

  return (
    <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-14 ml-5">
      {products.map((product, index) => (
        <ProductCard key={index} prop={product}></ProductCard>
      ))}
    </div>
  );
};

export default AllProd;
