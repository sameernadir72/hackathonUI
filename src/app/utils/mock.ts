import { Product } from "./types";
import kh from "../../../public/kh.png"
import rj from "../../../public/rj.png"
import bj from "../../../public/bj.png"
import ps from "../../../public/ps.png"
import gorchii from "../../../public/gorchii.png"
import pink from "../../../public/pink.png"
import brshirt from "../../../public/brshirt.png"
import mj from "../../../public/mj.png"
import bs from "../../../public/bs.png"

export const products:Product[] = [
    {
        id:1,
        name:"Star Wars Hoodie",
        price:150,
        category:"kids",
        image: kh
    },
    {
        id:2,
        name:"Round Brown Jacket",
        price:70,
        category:"men",
        image: rj
    },
    {
        id:3,
        name:"Dine Blue Jacket",
        price:170,
        category:"boys",
        image: bj
    },
    {
        id:4,
        name:"Deep Maroon Sweat Shirt",
        price:120,
        category:"men",
        image: ps
    },
    {
        id:5,
        name:"Gorchii T-Shirt",
        price:90,
        category:"men",
        image: gorchii
    },
    {
        id:6,
        name:"Round Black T-Shirt",
        price:70,
        category:"men",
        image: bs
    },
    {
        id:7,
        name:"Light Pink Full Sleeves",
        price:145,
        category:"boys",
        image: pink
    },
    {
        id:8,
        name:"Brown",
        price:115,
        category:"boys",
        image: brshirt
    },
    {
        id:9,
        name:"Multi LL Shirt",
        price:195,
        category:"men",
        image: mj
    }
];