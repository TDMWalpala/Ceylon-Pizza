import Link from "next/link"

export default function Header() {
    return (
        <header className="flex items-center justify-between">
        <nav className="flex items-center gap-8 font-semibold text-gray-500">
        <Link href="/" className="text-2xl font-semibold text-primary">Ceylon Piazza</Link>
         <Link href={'/'}>Home</Link>
         <Link href={''}>Menu</Link>
         <Link href={''}>Contact</Link>
         <Link href={''}>About</Link>
        </nav>
        <nav className="flex items-center gap-3 text-gray-500">
        <Link href={'/register'} className="px-6 py-2">Register</Link>
        <Link href={'/login'} className="px-6 py-2 text-white rounded-full bg-primary">LogIn</Link>
        </nav>
     </header>
    );
}
