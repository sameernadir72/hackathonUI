import { FacebookIcon, LinkedinIcon, LucideTwitter, TwitchIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex m-4 px-28">
            <div className="max-w-xs flex flex-col justify-between">
                <Image src="/Logo.webp" alt="logo" width={150} height={150}></Image>
                <p className="leading-7">
                    Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                </p>
                <div className="flex space-x-4">
                    <Link href="" className="bg-gray-200 rounded-lg p-2"><TwitterIcon /></Link>
                    <Link href="" className="bg-gray-200 rounded-lg p-2"><FacebookIcon /></Link>
                    <Link href="" className="bg-gray-200 rounded-lg p-2"><LinkedinIcon /></Link>
                </div>
            </div>

            <div className="flex space-x-28 mx-auto">
                <div>
                    <h4 className="scroll-m-20 text-xl font-bold tracking-tight text-gray-600">
                        Company
                    </h4>
                    <div className="mt-5 space-y-4">
                        <p><Link href="" className="">About</Link></p>
                        <p><Link href="">Terms Of Use</Link></p>
                        <p><Link href=""> Privacy Policy</Link></p>
                        <p><Link href="">How it Works</Link></p>
                        <p><Link href="">Contact Us</Link></p>
                    </div>
                </div>
                <div>
                    <h4 className="scroll-m-20 text-xl font-bold tracking-tight text-gray-600">
                        Support
                    </h4>
                    <div className="mt-5 space-y-4">
                    <p><Link href="">Support Carrer</Link></p>
                    <p><Link href="">24h Service</Link></p>
                    <p><Link href=""> Quick Chat</Link></p>
                    </div>
                </div>
                <div>
                    <h4 className="scroll-m-20 text-xl font-bold tracking-tight text-gray-600">
                        Contact
                    </h4>
                    <div className="mt-5 space-y-4">
                    <p className="">Whatsapp</p>
                    <p>Support 24h</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;