import Hero from "../../components/section/Hero";
import Footer from "../../components/section/Footer";
import Newsletter from "../../components/section/newsletter";
import Promotions from "../../components/section/Promotions";
import Desc from "../../components/section/desc";
import { HeroSecData, Product, PromotionData } from "./utils/types";
import { fetchFeaturedData, fetchFeaturedProducts, fetchHeroSecData, fetchPromotionsData } from "./data";
import Featured from "components/section/Featured";

export default async function Home() {
  const featuredProducts: Product[] = await fetchFeaturedProducts();
  const heroSecData: HeroSecData = await fetchHeroSecData();
  const promotionsData: PromotionData = await fetchPromotionsData();
  const featuredData = await fetchFeaturedData();
  console.log(heroSecData);
  return (
    <>
      <main className="px-28">
        <Hero data={heroSecData} />
        <Promotions data={promotionsData}/>
        <Featured featuredProducts={featuredProducts} data={featuredData} />
      </main>
      <Desc />
      <main className="px-28">
        <Newsletter />
      </main>
    </>
  );
}
