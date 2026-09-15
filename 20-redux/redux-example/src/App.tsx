import CounterPage from './CounterPage'
import LanguagePage from './LanguagePage'
import MoviePage from './MoviePage'
import Stam from './Stam'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import UserPage from './UserPage'
import CityPage from './CityPage'
import UserPage2 from './UserPage2'
import DisplayUser from './DisplayUser'
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
      <Route path="/city" element={<CityPage />} />
      <Route path="/displayuser" element={<DisplayUser />} />
      <Route path="/user2" element={<UserPage2 />} />
    </Routes>
    </>
  )
}

export default App
