import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import User from './pages/User'
import Users from './pages/Users'
import NOTFOUND from './pages/NOTFOUND'
function App() {
  
  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="*" element={<NOTFOUND />} />
     </Routes>
    </>
  )
}

export default App
