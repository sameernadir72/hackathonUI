import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProductCard = (props:{id:number, title:string, category:string, price:number, image:StaticImageData}) => {
  return (
    <div className="">
      <Link href={`/products/${props.id}`}>
        <Image src={props.image} alt="product image"></Image>
        <p className="leading-7 [&:not(:first-child)]:mt-3">{props.title}</p>
        <p className="leading-7 [&:not(:first-child)]:mt-3">{props.category}</p>
        <p className="leading-7 [&:not(:first-child)]:mt-3">{props.price}</p>
        </Link>
    </div>
  )
}

export default ProductCard; 
