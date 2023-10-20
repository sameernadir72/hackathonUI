import { StaticImageData } from "next/image"

export type Product = {
    id: number,
    name: string,
    description: string,
    category: string,
    subCategory: string,
    size: string[],
    main_image: StaticImageData,
    images: StaticImageData[], 
    isSoldOut: boolean,
    isFavourite: boolean,
    price: number,
    subTotal:number
}