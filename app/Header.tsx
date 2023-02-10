import React from "react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="p-5 bg-blue-400">
      <Link href="/" className="px-2 py-1 rounded-lg  bg-green-300">
        Home
      </Link>
    </header>
  )
}
