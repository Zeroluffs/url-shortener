import Image from 'next/image'
import { InputField } from './InputField'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">Url Shortener</h1>
        <p className="text-xl text-center">A simple url shortener</p>
      </header>
      <InputField />
      <footer>Made By Jhoner Pineda</footer>
    </main>
  )
}
