import {
  useEffect,
  useState
} from 'react'

type Task = {
  task_id: number
  title: string
  priority:
    | 'low'
    | 'medium'
    | 'high'
  category: string
  user_id: number
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
    

  async function getTasks() {
    try {
      const token =
        localStorage.getItem(
          'token'
        )

      const response =
        await fetch(
          'http://localhost:3000/api/tasks',
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        )

      if (!response.ok) {
        throw new Error(
          'Failed to get tasks'
        )
      }

      const data =
        await response.json()

      setTasks(data)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div>
      <h2>My Tasks</h2>

      <button onClick={getTasks}>
        Refresh Tasks
      </button>

      {tasks.map(task => (
        <div key={task.task_id}>
          <h3>{task.title}</h3>

          <p>
            Priority:
            {' '}
            {task.priority}
          </p>

          <p>
            Category:
            {' '}
            {task.category}
          </p>
        </div>
      ))}
    </div>
  )
}

export default TaskList
