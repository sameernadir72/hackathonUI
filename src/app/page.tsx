import Hero from "../../components/section/Hero";
import Footer from "../../components/section/Footer";
import Newsletter from "../../components/section/newsletter";
import Promotions from "../../components/section/Promotions";
import Desc from "../../components/section/desc";
import { Product } from "./utils/types";
import { fetchFeaturedProducts } from "./products";
import Featured from "components/section/Featured";

export default async function Home() {
  const featuredProducts:Product[] = await fetchFeaturedProducts();
  console.log(featuredProducts);
  return (
    <>
    <main className="px-28">
      <Hero />
       <Promotions />
      <Featured featuredProducts={featuredProducts}/>
      </main>
      <Desc />
      <main className="px-28">
      <Newsletter />
      </main>
    </>
  );
}
