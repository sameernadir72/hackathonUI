import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProductCard = (props:{id:number, title:string, category:string, price:number, image:StaticImageData}) => {
  return (
    <div className="justify-evenly">
      <Link href={`/products/${props.id}`}>
        <Image src={props.image} alt="product image"></Image>
        <p className="leading-7 ">{props.title}</p>
        <p className="leading-7 ">{props.category}</p>
        <p className="leading-7 ">${props.price}</p>
        </Link>
    </div>
  )
}

export default ProductCard; 
