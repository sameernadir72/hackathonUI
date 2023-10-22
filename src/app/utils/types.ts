import { StaticImageData } from "next/image"

type Image = {
    asset: {
        url: string
    }
}

type Size = {
    name: string
}

export type Category = {
    id: string
    name: string
}


export type Product = {
    _rev: string,
    name: string,
    description: string,
    category: Category,
    subCategory: Category,
    size: Size[],
    main_image: Image,
    images: Image[], 
    isSoldOut: boolean,
    isFavourite: boolean,
    price: number,
    subTotal:number
    quantity: number
}