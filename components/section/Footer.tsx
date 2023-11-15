import { sora_light } from "@/app/layout";
import { FacebookIcon, LinkedinIcon, LucideTwitter, TwitchIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="">
            <div className="m-4 mt-24 mb-40 max-w-5xl  grid grid-cols-1 sm:grid-cols-4 gap-x-40">
                <div className="flex flex-col  w-40 gap-y-10">

                <Image src="/Logo.webp" alt="logo" width={150} height={50}></Image>
                <p className={`leading-tight tracking-wide w-80 text-gray-600 font-poppins ${sora_light.className}`}>
                    Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                </p>
                <div className="flex space-x-4">
                    <Link href="/" className="bg-gray-200 rounded-lg p-2"><TwitterIcon /></Link>
                    <Link href="/" className="bg-gray-200 rounded-lg p-2"><FacebookIcon /></Link>
                    <Link href="/" className="bg-gray-200 rounded-lg p-2"><LinkedinIcon /></Link>
                </div>
                </div>
                <div className="flex ml-28 space-x-16 mb-3 -mt-1">
            <div className="flex space-x-28 mx-auto">
                <div className="">
                    <h4 className="scroll-m-20 text-xl font-bold tracking-wide text-gray-600">
                        Company
                    </h4>
                    <div className={`mt-5 space-y-3 w-40 tracking-wide text-gray-600 font-poppins ${sora_light.className}`}>
                        <p><Link href="/" className="">About</Link></p>
                        <p><Link href="/">Terms Of Use</Link></p>
                        <p><Link href="/"> Privacy Policy</Link></p>
                        <p><Link href="/">How it Works</Link></p>
                        <p><Link href="/">Contact Us</Link></p>
                    </div>
                </div>
            </div>

            <div className="flex mx-auto">
            <div>
                    <h4 className="scroll-m-20 text-xl font-bold tracking-wide text-gray-600">
                        Support
                    </h4>
                    <div className={`mt-5 space-y-3 w-40 tracking-wide text-gray-600 font-poppins ${sora_light.className}`}>
                    <p><Link href="/">Support Carrer</Link></p>
                    <p><Link href="/">24h Service</Link></p>
                    <p><Link href="/"> Quick Chat</Link></p>
                    </div>
                </div>
            </div>
            <div className="flex  mx-auto">
            <div>
                    <h4 className="scroll-m-20 text-xl font-bold tracking-wide text-gray-600">
                        Contact
                    </h4>
                    <div className="mt-5 space-y-3 w-40 tracking-wide text-gray-600">
                    <p className="">Whatsapp</p>
                    <p>Support 24h</p>
                    </div>
                </div>
            </div>
            </div>
            </div>

            <hr className="border-black"></hr>
            <div className="flex justify-between -mb-8  mt-5 ">
                <p className="w-44 font-semibold text-gray-500">Copyright © 2023 Muhammad Masood</p>
                <p className={`w-40 text-gray-500 ${sora_light.className}`}>Design by. <span className="font-bold text-black">Sameer Nadir</span></p>
                <p className={`w-64 text-gray-500 ${sora_light.className}`}>Code by. <span className="text-black font-bold"> Muhammad-Masood on github </span></p>
            </div>
        </footer>
    )
}

export default Footer;