// app/components/navbar.js
'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Site Logo/Name */}
        <div className="text-2xl font-bold text-gray-800">Simrah</div>

        {/* Nav Items */}
        <ul className="flex space-x-8 text-lg font-semibold text-gray-700">
          <li>
            <Link href="/" className="hover:text-blue-500 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/cv" className="hover:text-blue-500 transition-colors duration-300">
              CV
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-500 transition-colors duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500 transition-colors duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
