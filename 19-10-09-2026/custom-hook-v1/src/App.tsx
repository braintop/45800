import Menu from './components/Menu'
import Users from './pages/Users'
import Posts from './pages/Posts'
import {CartButtons} from './pages/CartButtons'
function App() {
  // document.title = 'Custom Hook1';
  return (
    <>
  
    <h1>Custom Hook</h1>
    <Menu />
    <Users />
    <Posts />
    <CartButtons />
    </>
  )
}

export default App
