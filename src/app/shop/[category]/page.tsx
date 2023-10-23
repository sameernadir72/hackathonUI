import { fetchProductByCategory } from "@/app/data";
import ProductCard from "../../../../components/section/ProductCard";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const filteredProducts = await fetchProductByCategory(params.category);
  return (
    <>
      <section className="text-gray-600 body-font ml-5 mt-7 px-28">
        <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-14">
          {filteredProducts.map((product) => (
            <ProductCard key={product._rev} prop={product}></ProductCard>
          ))}
        </div>
      </section>
    </>
  );
}
