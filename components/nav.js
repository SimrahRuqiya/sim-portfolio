import Link from "next/link";

export default function nav() {
    return (
        <nav className="flex justify-between items-center p-4 bg-babypink text-offwhite">
            <Link href="/" className="text-2xl font-bold">Home</Link>
            <Link href="/projects" className="text-2xl font-bold">Projects</Link>
            <Link href="/about" className="text-2xl font-bold">About</Link>
            <Link href="/contact" className="text-2xl font-bold">Contact</Link>
        </nav>
    );
}