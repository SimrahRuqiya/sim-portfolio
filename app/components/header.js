import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-blue-100 shadow-md sticky top-0 z-50">
            <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-babyblue">
                    Simrah's Portfolio
                </div>
                <ul className="flex space-x-6 text-gray-400 font-medium">
                    <li>
                        <Link href="/about" className="hover:text-blue-800 transition-colors">
                        About
                    </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:text-blue-800 transition-colors">
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-blue-800 transition-colors">
                        Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}  
