import { StaticImageData } from "next/image"

export type HeroSecData = {
    label: string;
    heading: string;
    subHeading: string;
    image: PImage;
    bgColor: string;
}

export type FeaturedData = {
    title: string;
}

export type PImage = {
    asset: {
        url: string
    }
}

export type Size = {
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
    main_image: PImage,
    images: PImage[],
    isSoldOut: boolean,
    isFavourite: boolean,
    price: number,
    quantity: number;
    _createdAt: Date;
    subTotal: number;
}