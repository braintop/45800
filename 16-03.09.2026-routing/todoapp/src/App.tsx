import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Todos from './pages/Todos'
import Todo from './pages/Todo'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/todo/:id" element={<Todo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
