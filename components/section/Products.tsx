import Image from "next/image";
import pm1 from '../../public/pm1.png'
import pm3 from '../../public/pm3.jpg'
import pm4 from '../../public/pm4.jpg'

const Products = () => {
    return(
        <div className="px-28">
            <div className="flex flex-col justify-center items-center">
             <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm font-bold tracking-wider text-blue-600">PRODUCTS</p>
             <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-wide transition-colors first:mt-0">
             Check What We Have
            </h2>
            </div>
            <div className="">
                <Image src={pm1} alt="pm1"></Image>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Flex Push Button Bomber</h4>
                <p className="font-semibold text-lg">$225</p>
                <Image src={pm4} alt="pm4" width={278} height={100}></Image>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Flex Push Button Bomber</h4>
                <p className="font-semibold text-lg">$225</p>
                <Image src={pm3} alt="pm3" width={278} height={100}></Image>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Flex Push Button Bomber</h4>
                <p className="font-semibold text-lg">$225</p>
            </div>
        </div>
)
}

export default Products;