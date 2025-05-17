// app/components/hero.js
'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white">
      <h1 className="text-5xl font-bold text-primaryBlue mb-4">
        Hi, I’m Simrah
      </h1>
      <p className="max-w-xl text-lg text-textLightGray mb-8">
        I'm a passionate Computing & IT student with a strong interest in IT, Networking, Cloud Computing, DevOps, Software Development and UI/UX Design. I love creating innovative solutions and exploring new technologies.
      </p>
      <Link
        href="/projects"
        className="px-6 py-3 rounded-md bg-primaryBlue text-white font-semibold hover:bg-lightBlue transition-colors duration-300"
      >
        Scroll to learn more about me
      </Link>
    </section>
  )
}
