import Image from "next/image";

export default function RegisterPage(){
    return(
        <section className="mt-8">
            <h1 className="mb-4 text-3xl text-center text-primary">Register</h1>
            <form className="block max-w-xs mx-auto">
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password"/>
                <button type="submit">Register</button>
                <div className="my-4 text-center text-gray-500">
                  or login with provider
                </div>
                <button className="flex justify-center gap-4"> <Image src={'/google.png'} alt="google" width={24} height={24}></Image> Login with google</button>
            </form>
           
        </section>
    )
}