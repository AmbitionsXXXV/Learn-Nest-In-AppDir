"use client"

import { useRouter } from "next/navigation"
// 对比 import { useRouter } from "next/router"
// 适用于app文件夹下的客户端组件，不能在app文件夹下的服务端组件使用
// next/navigation下的useRouter的返回值只有当前路由，不能获取pathname，要获取只能使用usePathname()
// 同样不能获取query参数，需要单独使用useSearchParams()
// 而"next/router"下的这三个参数可以直接由useRouter()返回

import React, { FormEvent, useState } from "react"

function Search() {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch("")
    router.push(`/search/${search}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the Search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-400 text-white font-bold py-2 px-4 rounded-lg"
      >
        Search
      </button>
    </form>
  )
}

export default Search
