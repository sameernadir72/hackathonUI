import { Product } from "@/app/utils/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProductCard = ({prop}:{prop:Product}) => {
  const {id} = prop;
  return (
    <div className="py-11">
      <Link className="" href={`/products/${id}`}>
        <Image src={prop.image} alt="product image"></Image>
        <p className="font-poppins text-lg font-semibold  text-gray-900 mt-2 tracking-wide">{prop.name}</p>
        <p className="font-poppins text-lg  leading-loose text-gray-500">{prop.subCategory}</p>
        <p className="font-sans-serif text-xl font-semibold text-black mt-1 tracking-normal">${prop.price}</p>
      </Link>
    </div>
  )
}

export default ProductCard;