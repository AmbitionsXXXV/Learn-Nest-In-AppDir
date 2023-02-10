import Link from "next/link"
import React from "react"

function Home() {
  return (
    <div>
      Home Page
      <Link href="/todos" className="px-2 py-1 rounded-lg bg-red-400">
        todos page
      </Link>
    </div>
  )
}

export default Home
