
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="text-center p-4">
    <h1 className="text-2xl font-bold">My Portfolio</h1>
    <p>Welcome to my personal portfolio!</p>
  </div>
  
  )
}
