import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Todos from './pages/Todos'
import Todo from './pages/Todo'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Albums from './pages/Albums'
import Album from './pages/Album'
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/todo/:id" element={<Todo />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
