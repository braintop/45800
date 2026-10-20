import { useState } from 'react'

function AITaskForm() {
  const [message, setMessage] =useState('')
    

  const [loading, setLoading] = useState(false)
   

  const [result, setResult] = useState('')
    

  async function addTask() {
    if (!message.trim()) {
      return
    }

    try {
      setLoading(true)

      const token =
        localStorage.getItem('token')

      const response = await fetch(
        'http://localhost:3000/api/tasks/ai',
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json',

            Authorization:
              `Bearer ${token}`
          },

          body: JSON.stringify({
            message
          })
        }
      )

      if (!response.ok) {
        throw new Error(
          'Failed to create task'
        )
      }

      const data =await response.json()
        

      setResult(
        `Task created: ${data.title}`
      )

      setMessage('')

    } catch (error) {
      console.error(error)

      setResult(
        'Something went wrong'
      )

    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Add Task With AI</h2>

      <textarea
        value={message}
        onChange={(event) =>
          setMessage(
            event.target.value
          )
        }
        placeholder="Example: Finish React homework urgently"
      />

      <br />

      <button
        onClick={addTask}
        disabled={loading}
      >
        {loading
          ? 'Creating...'
          : 'Add Task'}
      </button>

      <p>{result}</p>
    </div>
  )
}

export default AITaskForm
