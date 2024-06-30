import Image from "next/image";
import logo from "../public/Logo 2.svg";
import Navigation from "./Navigation";

export default function Header() {
    return (

        <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg">
            <div className="container flex items-center justify-between py-8 ">

                <Image src={logo} alt="logo" className="md:w-[15%] w-[30%]" />

                <Navigation />
            </div>
        </div>
    );
}