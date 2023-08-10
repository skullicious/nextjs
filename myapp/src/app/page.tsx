import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <div>
    <Link href="/notes">NOTES</Link>
    <h1>Home page</h1>
    <p>Some content</p>
   </div>
  )
}
