import { useState } from 'react'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import AITaskForm from './components/AITaskForm'
import TaskList from './components/TaskList'

function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem('token'))
  )

  // מחליט איזה טופס מציגים כשלא מחוברים: Login או Register
  const [showRegister, setShowRegister] = useState(false)

  if (!loggedIn) {
    if (showRegister) {
      return (
        <RegisterForm
          onLogin={() => setLoggedIn(true)}
          onSwitchToLogin={() => setShowRegister(false)}
        />
      )
    }

    return (
      <LoginForm
        onLogin={() => setLoggedIn(true)}
        onSwitchToRegister={() => setShowRegister(true)}
      />
    )
  }

  return (
    <div>
      <h1>AI Task Manager</h1>

      <button
        onClick={() => {
          localStorage.removeItem('token')
          setLoggedIn(false)
        }}
      >
        Logout
      </button>

      <AITaskForm />

      <TaskList />
    </div>
  )
}

export default App
