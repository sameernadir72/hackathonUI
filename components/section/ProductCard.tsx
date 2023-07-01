import { Product } from "@/app/utils/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProductCard = ({prop}:{prop:Product}) => {
  const {id} = prop;
  return (
    <div className="px-10 py-5 mx-auto ">
      <Link href={`/products/${id}`}>
        <Image src={prop.image} alt="product image"></Image>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{prop.name}</h2>
        <p className="leading-relaxed text-base">{prop.subCategory}</p>
        <p className="leading-relaxed text-base">$ {prop.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard; 
