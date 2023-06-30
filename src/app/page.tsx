import Hero from "../../components/section/Hero";
import Footer from "../../components/section/Footer";
import Newsletter from "../../components/section/newsletter";
import Promotions from "../../components/section/Promotions";
import Desc from "../../components/section/desc";
import Products from "../../components/section/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotions />
      <Products />
      <Desc />
      <Newsletter />
    </>
  );
}
