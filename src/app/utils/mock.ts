import { Product } from "./types";


import kh from "../../../public/kh.png"
import kh1 from "../../../public/kids.1.jpg"
import kh2 from "../../../public/kids.3.jpg"
import kh3 from "../../../public/kids.4.jpg"
import kh4 from "../../../public/kids.5.jpg"
import kh6 from "../../../public/kids.8.jpg"
import kh5 from "../../../public/kids.7.jpg"

import rj from "../../../public/rj.png"
import bj from "../../../public/bj.png"
import ps from "../../../public/ps.png"
import gorchii from "../../../public/gorchii.png"
import pink from "../../../public/pink.png"
import brshirt from "../../../public/brshirt.png"
import mj from "../../../public/mj.png"
import bs from "../../../public/bs.png"

import bw from "../../../public/bw.png"
import kh from "../../../public/kh.png"
import bbb from "../../../public/bbb.png"
import pg from "../../../public/pg.png"


export const products:Product[] = [
    {
        id:1,
        name:"Star Wars Hoodie",
        price:150,
        category:"kids",

        subCategory:"Hoodie",
        image: kh
       

    },
    {
        id:2,
        name:"Round Brown Jacket",
        price:70,
        category:"men",

        subCategory:"Jacket",


        image: rj
    },
    {
        id:3,
        name:"Dine Blue Jacket",
        price:170,
        category:"boys",
        subCategory:"Jacket",
        image: bj
    },
    {
        id:4,
        name:"Deep Maroon Sweat Shirt",
        price:120,
        category:"men",

        subCategory:"Sweater",

        image: ps
    },
    {
        id:5,
        name:"Gorchii T-Shirt",
        price:90,
        category:"men",

        subCategory:"T Shirt",

        image: gorchii
    },
    {
        id:6,
        name:"Round Black T-Shirt",
        price:70,
        category:"men",

        subCategory:"T Shirt",

        image: bs
    },
    {
        id:7,
        name:"Light Pink Full Sleeves",
        price:145,
        category:"boys",

        subCategory:"Sweater",

        image: pink
    },
    {
        id:8,

        name:"Brown Sweat Shirt",
        price:115,
        category:"boys",
        subCategory:"Sweater",
        image: brshirt
    },
    {
        id:9,
        name:"Multi LL Shirt",
        price:195,
        category:"men",
        subCategory:"Shirt",
        image: mj
    },
   
    {
        id:10,
        name:"Dine Blue Jacket Kids",
        price:290,
        category:"kids",
        subCategory:"Jacket",
        image: bbb
    },
    
    {
        id:11,
        name:"Baby Pink Frock",
        price:590,
        category:"kids",
        subCategory:"Frock",
        image: pg
    },
    {
        id:12,
        name:"Toddler Suit",
        price:270,
        category:"kids",
        subCategory:"Suit",
        image: bw
    },


       
    {
        id:11,
        name:"Star Wars Hoodie",
        price:550,
        category:"kids",
        image: kh1
    },
    
    {
        id:12,
        name:"Star Wars Hoodie",
        price:640,
        category:"kids",
        image: kh3
    },
    {
        id:13,
        name:"Star Wars Hoodie",
        price:330,
        category:"kids",
        image: kh4
    },
    {
        id:14,
        name:"Star Wars Hoodie",
        price:220,
        category:"kids",
        image: kh5
    },
   
   

];