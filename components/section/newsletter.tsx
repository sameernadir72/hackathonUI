import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Newsletter = () => {
    return (
        <div className="flex flex-col justify-center items-center m-40">
            <h2 className="scroll-m-20  pb-2 text-4xl font-bold tracking-wide transition-colors first:mt-0">
            Subscribe Our Newsletter
    </h2>
            <p className="leading-7 mt-3">
                Get the latest information and promo offers directly
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2 mt-8">
                <Input className="border-black rounded-none w-full pr-10" type="email" placeholder="Input email address" />
                <Button className="w-48 bg-black" type="submit">Get Started</Button>
            </div>
        </div>
    )
}

export default Newsletter;