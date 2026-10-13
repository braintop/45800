// טופס התחברות עזר: השיעור מניח שכבר יש Login מקורס קודם
// ששומר את ה-Token ב-localStorage. הטופס הזה עושה בדיוק את זה.

import { useState } from 'react'

type Props = {
  onLogin: () => void
  onSwitchToRegister: () => void
}

function LoginForm({ onLogin, onSwitchToRegister }: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function login() {
    try {
      const response = await fetch(
        'http://localhost:3000/users/login',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            email,
            password
          })
        }
      )

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()

      localStorage.setItem(
        'token',
        data.token
      )

      onLogin()

    } catch (err) {
      console.error(err)
      setError('Login failed')
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        value={email}
        onChange={(event) =>
          setEmail(event.target.value)
        }
        placeholder="Email"
      />

      <br />

      <input
        type="password"
        value={password}
        onChange={(event) =>
          setPassword(event.target.value)
        }
        placeholder="Password"
      />

      <br />

      <button onClick={login}>
        Login
      </button>

      <p>{error}</p>

      <button onClick={onSwitchToRegister}>
        No account yet? Register
      </button>
    </div>
  )
}

export default LoginForm
