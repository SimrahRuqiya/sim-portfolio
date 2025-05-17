import './globals.css'

import nav from '/components/nav'
import footer from '/components/footer'

export const metadata = {
  title: 'Simrah Portfolio',
  description: 'Created using Next.js 13.4.4 and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav />
        <main className="screen">{children}</main>
        <footer />
      </body>
    </html>
  )
}