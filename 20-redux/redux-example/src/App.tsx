import CounterPage from './CounterPage'
import LanguagePage from './LanguagePage'
import MoviePage from './MoviePage'
import Stam from './Stam'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import UserPage from './UserPage'
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<CounterPage />} />
      <Route path="/language" element={<LanguagePage />} />
      <Route path="/movie" element={<MoviePage />} />
      <Route path="/stam" element={<Stam />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
    </>
  )
}

export default App
