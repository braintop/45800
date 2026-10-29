import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'

type Task = {
  _id: string
  title: string
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    fetch('/api/tasks').then((res) => res.json()).then(setTasks)
  }, [])

  async function addTask(e: FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
    const task = await res.json()
    setTasks([...tasks, task])
    setTitle('')
  }

  return (
    <main>
      <h1>My Tasks</h1>
      <form onSubmit={addTask}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map((t) => <li key={t._id}>{t.title}</li>)}
      </ul>
    </main>
  )
}
