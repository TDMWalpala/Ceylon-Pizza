import Image from "next/image";

export default function HomeMenu(){
    return(
        
       <section className="">
        <div className="absolute left-0 right-0 w-full">
        <div className="absolute right-0 -z-10 -top-24">
            <Image src={'/sallad2.png'} alt="sallad" width={107} height={195}></Image>
        </div>
        <div className="absolute left-0 -z-10 -top-24">
            <Image src={'/sallad1.png'} alt="sallad" width={189} height={189}></Image>
        </div>
        </div>
         <div className="">
            <div className="text-center">
            <h1 className="font-semibold text-gray-500 uppercase">Check out</h1>
            <h1 className="text-4xl italic font-bold leading-5 text-primary">Menu</h1>
            </div>
        </div>
       </section>
    );
}