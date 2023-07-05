import Image from "next/image";
import { Button } from "../ui/button";
import pm3 from '../../public/pm3.jpg'
const Desc = () => {
    return (
        <div className="my-20 ">
            <div className=" text-center sm:text-left sm:absolute  top-[1981px] right-4">
                <h1 className="scroll-m-20 text-4xl  font-bold tracking-normal lg:text-5xl max-w-[29rem]">
                    Unique and Authentic Vintage Designer Jewellery
                </h1>
            </div>
            <div className="bg-slate-50   w-96 sm:w-auto">
                <div className="px-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:p-40 mt-5 md:gap-x-5 ">
                    <div className="space-y-8">
                        <h4 className="scroll-m-20 w-44 text-xl font-semibold tracking-tight">
                            Using Good Quality Materials
                        </h4>
                        <p className="w-40">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        <h4 className="scroll-m-20 w-40 text-xl font-semibold tracking-tight">
                            Modern Fashion Design
                        </h4>
                        <p className="w-40">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>

                    <div className="space-y-8">
                        <h4 className="scroll-m-20 w-40 text-xl font-semibold tracking-tight">
                            100% Handmade Products
                        </h4>
                        <p className="w-40">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        <h4 className="scroll-m-20 w-40 text-xl font-semibold tracking-tight">
                            Discount for Bulk Orders
                        </h4>
                        <p className="w-40">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>

                    </div>

                    <div className="md:mt-2 ">
                        <Image src={pm3} width={300} alt="pm3"></Image>
                    </div>

                    <div className="space-y-8 ml-1">
                        <p className="w-48 tracking-wider">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Button className="bg-black py-7 text-base">
                            See All Product
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desc;