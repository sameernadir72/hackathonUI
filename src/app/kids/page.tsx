import ProductCard from "../../../components/section/ProductCard";
import kh from "../../../public/kh.png"

const Kids = () => {
    return (
      

      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard title="Star Wars Hoodie" category="Kids" price={232} image={kh}/>
        <ProductCard title="Star Wars Hoodie" category="Kids" price={232} image={kh}/>
        <ProductCard title="Star Wars Hoodie" category="Kids" price={232} image={kh}/>
        <ProductCard title="Star Wars Hoodie" category="Kids" price={232} image={kh}/>
        <ProductCard title="Star Wars Hoodie" category="Kids" price={232} image={kh}/>
        <ProductCard title="Star Wars Hoodie" category="Kids" price={232} image={kh}/>
        <ProductCard title="Star Wars Hoodie" category="Kids" price={232} image={kh}/>
        <ProductCard title="Star Wars Hoodie" category="Kids" price={232} image={kh}/>
      </div>
     
    )
  }
  
  export default Kids; 
  