import Hero from "../../components/section/Hero";
import Footer from "../../components/section/Footer";
import Newsletter from "../../components/section/newsletter";
import Promotions from "../../components/section/NewArrivals";
import Desc from "../../components/section/desc";
import { HeroSecData, Product } from "./utils/types";
import {
  fetchFeaturedData,
  fetchFeaturedProducts,
  fetchHeroSecData,
  fetchNewArrivalsData,
} from "./data";
import Featured from "components/section/Featured";
import NewArrivals from "../../components/section/NewArrivals";

export default async function Home() {
  const featuredProducts: Product[] = await fetchFeaturedProducts();
  const heroSecData: HeroSecData = await fetchHeroSecData();
  const newArrivalsData: Product[] = await fetchNewArrivalsData();
  const featuredData = await fetchFeaturedData();

  newArrivalsData.map((product, index) => (
    newArrivalsData[index]._createdAt = new Date(product._createdAt) 
  ));
  
  const mostRecentProducts = newArrivalsData.sort((p1,p2) => p1._createdAt.getTime() - p2._createdAt.getTime()).reverse();

  return (
    <main>
      <Hero data={heroSecData} />
      <NewArrivals data={mostRecentProducts} />
      <Featured featuredProducts={featuredProducts} data={featuredData} />
      <Desc />
      <Newsletter />
    </main>
  );
}
