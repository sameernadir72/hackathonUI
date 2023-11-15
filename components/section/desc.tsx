import Image from "next/image";
import { Button } from "../ui/button";
import { PImage } from "@/app/utils/types";
import { sora, sora_light } from "@/app/layout";

const Desc = ({ descImage }: { descImage: PImage }) => {
  return (
    <div className="relative">
      <div className="flex lg:justify-end sm:justify-center">
        <h1
          className={`scroll-m-20 text-4xl tracking-wide lg:text-[2.75rem] max-w-[29rem] ${sora.className} leading-[55px] absolute top-[-6rem]`}
        >
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>
      <div className={`bg-slate-50 pt-24 ${sora_light.className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 md:gap-x-5 ">
          <div className={`space-y-4`}>
            <h4 className="scroll-m-20 w-44 text-lg font-semibold tracking-tight leading-6">
              Using Good Quality Materials
            </h4>
            <p className="w-44 opacity-75">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
            <h4 className="scroll-m-20 w-40 text-lg font-semibold tracking-tight leading-6">
              Modern Fashion Design
            </h4>
            <p className="w-44">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="scroll-m-20 w-40 text-lg font-semibold tracking-tight leading-6">
              100% Handmade Products
            </h4>
            <p className="w-44">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
            <h4 className="scroll-m-20 w-40 text-lg font-semibold tracking-tight leading-6">
              Discount for Bulk Orders
            </h4>
            <p className="w-44">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>

            <div className="">
              <Image
              className="pb-4 pr-2"
                src={descImage.asset.url}
                width={400}
                alt="pm3"
                height={400}
              ></Image>
            </div>

            <div className="space-y-3 ml-1">
              <p style={{ wordSpacing: "0.8rem" }} className="w-56 opacity-75">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <Button className="bg-black py-5 text-base">
                See All Product
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Desc;
