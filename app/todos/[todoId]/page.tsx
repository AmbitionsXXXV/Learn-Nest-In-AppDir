import React from "react"
import { Todo } from "../../../type"
import { notFound } from "next/navigation"

export const dynamicParams = true

type PageProps = {
  params: {
    todoId: string
  }
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  )
  // { next: { revalidate: 60 } }，请求数据缓存60s
  // 等同于pageDir中getStaticProps开启revalidate
  const todo: Todo = await res.json()

  return todo
}

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId)

  if (!todo.id) return notFound()
  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: #{todo.title}
      </p>
      <p>Completed: ${todo.completed ? "Yes" : "No"}</p>

      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  )
}

export default TodoPage

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
  const todos: Todo[] = await res.json()

  const trimmedTodos = todos.splice(0, 10)

  return trimmedTodos.map((todo) => ({ todoId: todo.id.toString() }))
}
