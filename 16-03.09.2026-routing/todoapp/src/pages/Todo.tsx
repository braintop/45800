import { useParams } from "react-router-dom"
export default function Todo() {
  const { id } = useParams()
  let t= useParams()
  console.log(t)
  return <div>Todo {id}</div>
}