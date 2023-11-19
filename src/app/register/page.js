"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage(){
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userCreating, setUserCreating] = useState(false)
    const [userCreated, setUserCreated] = useState(true)
    async function handleSubmit(ev){
        ev.preventDefault();
        setUserCreating(true)
       await fetch('/api/register',{
            method:'POST',
            body: JSON.stringify({email,password}),
            headers:{'Content-Type': 'application/json'}
        })
        setUserCreating(false)
    }
    return(
        <section className="mt-8">
            <h1 className="mb-4 text-3xl text-center text-primary">Register</h1>
            {userCreated &&(
                <div className="my-4 text-center">
                    User created, <br/> now you can <Link href={'/login'} className="underline">logging &raquo;</Link>
                </div>
            )}
            <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
                <input type="email" placeholder="email" value={email} onChange={ev=>setEmail(ev.target.value)} disabled={userCreating} />
                <input type="password" placeholder="password" value={password} onChange={ev=>setPassword(ev.target.value)} disabled={userCreating}/>
                <button type="submit" disabled={userCreating}>Register</button>
                <div className="my-4 text-center text-gray-500">
                  or login with provider
                </div>
                <button className="flex justify-center gap-4"> <Image src={'/google.png'} alt="google" width={24} height={24}></Image> Login with google</button>
            </form>
           
        </section>
    )
}