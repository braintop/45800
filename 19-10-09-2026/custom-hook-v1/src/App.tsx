import { Route, Routes } from 'react-router-dom'
import Users from './pages/Users'
import Posts from './pages/Posts'
import {CartButtons} from './pages/CartButtons'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import { PasswordPage } from './pages/PasswordPage'
function App() {
  // document.title = 'Custom Hook1';
  return (
    <>
    <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/users" element={<Users />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/cart" element={<CartButtons />} />
    <Route path="/password" element={<PasswordPage />} />
  </Routes>
    <h1>Custom Hook</h1>
    </>
  )
}

export default App
