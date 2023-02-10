import Link from "next/link"
import React from "react"
import { Todo } from "../../type"

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
  // 等同于，默认缓存策略{ cache: 'force-cache' }
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos/",{ cache: 'force-cache' })
  // 以及等同于pageDir中在getStaticProps请求数据
  const todos: Todo[] = await res.json()

  return todos
}

async function TodosList() {
  const todos = await fetchTodos()

  return (
    <>
      {todos.map((todo) => (
        <p className="my-2" key={todo.id}>
          <Link
            className="px-2 py-1 rounded-lg bg-red-400"
            href={`/todos/${todo.id}`}
          >
            Todo: {todo.id}
          </Link>
        </p>
      ))}
    </>
  )
}

export default TodosList
