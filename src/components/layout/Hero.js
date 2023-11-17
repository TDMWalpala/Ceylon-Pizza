import Image from "next/image";
import Right from "../icons/Right";

export default function Her0(){
    return(
        <section className="hero">
            <div className="py-12">
            <h1 className="text-4xl font-semibold">Welcome to<br></br> Ceylon  <span className="text-primary">Pizza</span></h1>
            <p className="mt-4 text-sm text-gray-500">Indulge in the art of flavor with our handcrafted pizzas, made with love and the finest ingredients.</p>   
            <div className="flex gap-4 py-5 text-sm">
                <button className= "flex items-center gap-2 px-4 py-2 text-sm text-white uppercase rounded-full bg-primary">Order now<Right/></button>
                <button className="flex items-center gap-2 font-semibold text-gray">Learn more<Right/></button>
                </div>         
            </div>
            <div className='relative'>
            <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'Pizza'}></Image>
            </div>
        </section>
    )
}