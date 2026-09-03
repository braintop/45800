import { Link } from "react-router-dom"
import {useState, useEffect} from "react"   
export default function Todos() {
  const [todos, setTodos] = useState([])

  async function getTodos() {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos')
    let todos = await data.json()
    setTodos(todos)
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}><Link to={`/todo/${todo.id}`}>{todo.title}</Link> </li>
        ))}
      </ul>
    </div>
  )
}