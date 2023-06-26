import Image from "next/image";
import pink from '../../public/pink.png'
import gorchii from '../../public/gorchii.png'
import ps from '../../public/ps.png'

const Products = () => {
    return(
        <div className="pt-20 space-y-14">
            <div className="flex flex-col justify-center items-center gap-y-2">
             <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm font-bold tracking-wider text-blue-600">PRODUCTS</p>
             <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-wide transition-colors first:mt-0">
             Check What We Have
            </h2>
            </div>
            <div className="flex justify-center items-center">
                <div>
                <Image src={pink} alt="pink"></Image>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Flex Push Button Bomber</h4>
                <p className="font-semibold text-lg">$225</p>
                </div>
                <div>
                <Image src={ps}  alt="ps" ></Image>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Pink Sweat Shirt</h4>
                <p className="font-semibold text-lg">$105</p>
                </div>
                <div>
                <Image src={gorchii}  alt="gorchii" ></Image>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Blue Gorchii</h4>
                <p className="font-semibold text-lg">$190</p>
                </div>
            </div>
        </div>
)
}

export default Products;