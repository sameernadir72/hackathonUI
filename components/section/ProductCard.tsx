import { Product } from "@/app/utils/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const ProductCard = ({ prop }: { prop: Product }) => {
  const { _rev, name, subCategory, main_image, price } = prop || {};
  console.log(_rev, name, subCategory, main_image, price);
  return (
    <div className="py-4">
      <Link className="" href={`/products/${_rev}`}>
        <Image src={main_image.asset.url} alt="product image" width={200} height={200}></Image>
        <p className="font-poppins text-lg font-semibold  text-gray-900 mt-2 tracking-wide">
          {name}
        </p>
        <p className="font-poppins text-lg  leading-loose text-gray-500">
          {subCategory.name}
        </p>
        <p className="font-sans-serif text-xl font-semibold text-black mt-1 tracking-normal">
          ${price}
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
