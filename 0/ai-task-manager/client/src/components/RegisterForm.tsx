// טופס הרשמה: שולח user_name, email, password ל-POST /users/register.
// אחרי הרשמה מוצלחת אנחנו מיד מתחברים (POST /users/login) כדי לקבל Token,
// שומרים אותו ב-localStorage — בדיוק כמו ב-LoginForm — וקוראים ל-onLogin.

import { useState } from 'react'

type Props = {
  onLogin: () => void
  onSwitchToLogin: () => void
}

function RegisterForm({ onLogin, onSwitchToLogin }: Props) {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function register() {
    try {
      const response = await fetch(
        'http://localhost:3000/users/register',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            user_name: userName,
            email,
            password
          })
        }
      )

      if (!response.ok) {
        throw new Error('Register failed')
      }

      // ההרשמה לא מחזירה Token, אז מתחברים מיד עם אותם פרטים
      const loginResponse = await fetch(
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

      if (!loginResponse.ok) {
        throw new Error('Login after register failed')
      }

      const data = await loginResponse.json()

      localStorage.setItem(
        'token',
        data.token
      )

      onLogin()

    } catch (err) {
      console.error(err)
      setError('Register failed')
    }
  }

  return (
    <div>
      <h2>Register</h2>

      <input
        value={userName}
        onChange={(event) =>
          setUserName(event.target.value)
        }
        placeholder="User name"
      />

      <br />

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

      <button onClick={register}>
        Register
      </button>

      <p>{error}</p>

      <button onClick={onSwitchToLogin}>
        Already have an account? Login
      </button>
    </div>
  )
}

export default RegisterForm
