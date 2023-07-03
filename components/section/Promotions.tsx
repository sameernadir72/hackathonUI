import { Badge } from "../ui/badge";
import event2 from "../../public/event2.webp"
import event3 from "../../public/event3.webp"
import Image from "next/image";
const Promotions = () => {
    return(

        <div className="min-h-4xl mx-auto  pt-20 space-y-7">

        <div className="flex flex-col justify-center items-center">
             <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm font-bold tracking-wider text-blue-600">PROMOTIONS</p>
             <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-wide transition-colors first:mt-0 text-center p-1 sm:text-left">
             Our Promotions Events
            </h2>
        </div>
        <div className="flex flex-col  justify-center sm:flex-row space-x-2">
            <div className="space-y-5 my-4 md:my-0 ">
                <div className="bg-gray-300 w-[480px] h-[200px]  p-7 flex">
                    <div className="flex flex-col space-y-1">
                <h2 className="scroll-m-20 text-black text-3xl font-semibold tracking-widest transition-colors first:mt-0 text-center sm:text-left">
                GET UPTO</h2>
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-center sm:text-left">
                60%</h1>
                <p className="text-black tracking-wide text-lg w-44">For the summer season </p>
                </div>
                <div className="flex justify-end ml-32">
                    <Image className="" src={event3} alt="event3" width={150}></Image>
                </div>
                </div>
                <div className="bg-stone-900 w-[480px] h-[200px] items-center justify-center flex flex-col">
                <h2 className="scroll-m-20 text-white pb-2 text-5xl font-semibold tracking-tight transition-colors first:mt-0">
                GET 30% Off</h2>
                <p className="leading-7 text-white">
                    USE PROMO CODE </p>
                    <Badge variant="secondary" className="text-white bg-zinc-600 px-7 rounded-md text-lg tracking-widest">DINEWEEKENDSALE</Badge>
                </div>
            </div>

            <div className="flex flex-col  sm:flex-row gap-x-5 gap-y-2">
                <div className="bg-orange-100 w-1/2">
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
                <div className="bg-slate-300 w-1/2">
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