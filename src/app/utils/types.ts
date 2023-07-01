import { StaticImageData } from "next/image"

export type Product = {
    id: number,
    name: string,
    price: number,
    category: string,
    image: StaticImageData
}
export type CartProduct = Product & {
    quantity:number,
    subTotal:number,
}