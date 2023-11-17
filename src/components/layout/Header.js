import Link from "next/link"

export default function Header() {
    return (
        <header className="flex items-center justify-between">
        <Link href="" className="text-2xl font-semibold text-primary">Ceylon Piazza</Link>
        <nav className="flex items-center gap-8 font-semibold text-gray-500">
         <Link href={''}>Home</Link>
         <Link href={''}>Menu</Link>
         <Link href={''}>Contact</Link>
         <Link href={''}>About</Link>
         <Link href={''} className="px-6 py-2 text-white rounded-full bg-primary">Sign In</Link>
        </nav>
     </header>
    );
}
