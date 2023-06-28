import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProductCard = (props:{id:number, title:string, category:string, price:number, image:StaticImageData}) => {
  return (
    <div className="py-10 mx-auto ">
      <Link href={`/products/${props.id}`}>
        <Image src={props.image} alt="product image"></Image>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{props.title}</h2>
        <p className="leading-relaxed text-base">{props.category}</p>
        <p className="leading-relaxed text-base">Price {props.price}</p>
        {/* <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
        <p className="leading-7 [&:not(:first-child)]:mt-3"></p>
        <p className="leading-7 [&:not(:first-child)]:mt-3"></p>
        <p className="leading-7 [&:not(:first-child)]:mt-3"></p> */}
        
        </Link>
    </div>
  )
}

export default ProductCard; 
