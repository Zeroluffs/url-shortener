import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Url Shortener',
  description: 'A simple url shortener',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <header className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-center">Url Shortener</h1>
            <p className="text-xl text-center">A simple url shortener</p>
          </header>
          {children}
          <footer>Made By Jhoner Pineda</footer>
        </main>
      </body>
    </html>
  )
}
