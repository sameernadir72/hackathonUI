import Image, { StaticImageData } from "next/image";

const ProductCard = (props:{title:string, category:string, price:number, image:StaticImageData}) => {
  return (
    <div className="  ">
        <Image src={props.image} alt="product image"></Image>
        <p className=" [&:not(:first-child)]:mt-6">{props.title}</p>
        <p className=" [&:not(:first-child)]:mt-6">{props.category}</p>
        <p className=" [&:not(:first-child)]:mt-6">{props.price}</p>
    </div>
  )
}

export default ProductCard; 
