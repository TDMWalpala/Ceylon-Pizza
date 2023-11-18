import Image from "next/image";
import Menu from "../menu/MenuItem";
import SectionHeader from "./SectionHeaders";

export default function HomeMenu() {
    return (

        <section className="">
            <div className="absolute left-0 right-0 w-full">
                <div className="absolute right-0 -z-10 -top-24">
                    <Image src={'/sallad2.png'} alt="sallad" width={107} height={195}></Image>
                </div>
                <div className="absolute left-0 -z-10 -top-24">
                    <Image src={'/sallad1.png'} alt="sallad" width={189} height={189}></Image>
                </div>
            </div>
           <div className="mb-4 text-center">
            <SectionHeader mainHeader={'Menu'} subHeader={'check out'} />
           </div>
            <div className="grid grid-cols-3 gap-4">
                <Menu />
                <Menu />
                <Menu />
                <Menu />
                <Menu />
                <Menu />
            </div>
        </section>
    );
}