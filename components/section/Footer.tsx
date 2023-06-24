import { FacebookIcon, LinkedinIcon, LucideTwitter, TwitchIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <Image src="/Logo.webp" alt="logo" width={150} height={150}></Image>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
            </p>
            <div className="flex space-x-4">
                <Link href="" className="bg-gray-200 rounded-lg p-2"><TwitterIcon /></Link>
                <Link href="" className="bg-gray-200 rounded-lg p-2"><FacebookIcon /></Link>
                <Link href="" className="bg-gray-200 rounded-lg p-2"><LinkedinIcon /></Link>
            </div>
            <div>
                <h4 className="scroll-m-20 text-xl font-bold tracking-tight text-gray-600">
                    Company
                </h4>
                <div className="leading-7 [&:not(:first-child)]:mt-6">
                <p className="">About</p>
                <p>Terms Of Use</p>
                <p className=""> Privacy Policy</p>
                <p className="">How it Works</p>
                <p className="">Contact Us</p>
                </div>
                <h4 className="scroll-m-20 text-xl font-bold tracking-tight text-gray-600">
                    Support
                </h4>
                <p className="">Support Carrer</p>
                <p>24h Service</p>
                <p className=""> Quick Chat</p>
                <h4 className="scroll-m-20 text-xl font-bold tracking-tight text-gray-600">
                    Contact
                </h4>
                <p className="">Whatsapp</p>
                <p>Support 24h</p>
            </div>
        </div>
    )
}

export default Footer;