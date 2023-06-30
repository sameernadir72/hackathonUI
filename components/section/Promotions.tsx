import { Badge } from "../ui/badge";
import event2 from "../../public/event2.webp"
import event3 from "../../public/event3.webp"
import Image from "next/image";
const Promotions = () => {
    return(
        <div className="px-28  pt-20 space-y-7">
        <div className="flex flex-col justify-center items-center">
             <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm font-bold tracking-wider text-blue-600">PROMOTIONS</p>
             <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-wide transition-colors first:mt-0">
             Our Promotions Events
            </h2>
        </div>
        <div className="flex justify-evenly">
            <div className="space-y-5">
                <div className="bg-gray-300 w-96 h-40 items-start p-7 flex flex-col">
                <h2 className="scroll-m-20 text-black text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                GET UPTO</h2>
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
                60%</h1>
                <p className="leading-7 text-black">For the summer season </p>
                </div>
                <div className="bg-stone-900 w-96 h-40 items-center justify-center flex flex-col">
                <h2 className="scroll-m-20 text-white pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                GET 30% Off</h2>
                <p className="leading-7 text-white">
                    USE PROMO CODE </p>
                    <Badge variant="secondary" className="text-white bg-zinc-500 px-7 rounded-md">DINEWEEKENDSALE</Badge>
                </div>
            </div>

            <div className="flex gap-x-5">
                <div className="bg-orange-100 ">
                <div className="flex flex-col m-3">
                    <div>
                <p>Flex Sweatshirt</p> 
                    </div>
                <div className="flex flex-row">
                <p className="line-through me-2">$225.00</p>
                {' '}
                <h6 > <b>$190.00</b></h6>
                </div>
                </div>
                <Image className="" src={event2} alt="event2"></Image>
                </div>
                <div className="bg-slate-300">
                <div className="flex flex-col m-3">
                    <div>
                <p>Flex Push Button Bomber</p> 
                    </div>
                <div className="flex flex-row">
                <p className="line-through me-2">$225.00</p>
                {' '}
                <h6 > <b>$190.00</b></h6>
                </div>
                </div>
               
                <Image className="" src={event3} alt="event3"></Image>
                </div>
            </div>

            </div>
            </div>
    )
}

export default Promotions;