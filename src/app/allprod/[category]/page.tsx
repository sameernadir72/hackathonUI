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

      <>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
     
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      {
          filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              title={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
            ></ProductCard>
          ))
        }
      </div>
      
    </div>
  </div>
</section>
    {/* <div classNameName="grid grid-cols-4">
    {
          filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              title={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
            ></ProductCard>
          ))
        }
</div> */}
      {/* <div classNameName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              title={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
            ></ProductCard>
          ))
        }
     
    </div> */}
    {/* <div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nemo facere iste optio aliquid, repellendus, consequatur dicta tempora similique deleniti tenetur hic quis dolor deserunt nulla unde amet quasi eum, provident perspiciatis voluptates. Adipisci quam porro at et tempora similique corrupti odio id, quas beatae!
    </p>
    </div> */}
      </>
  )
}