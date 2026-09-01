import Counter from './components/Counter'
import Toggle from './components/Toggle'
import UserCard from './components/UserCard'
import ProductCard from './components/ProductCard'
import LoginForm from './components/LoginForm'
import Input from './components/Input'
function App() {
   
  return (
    <>
      <h1>Gitush</h1>
      <Input />
      <LoginForm />
      <Counter c={20} firstname="John" />
      <Counter c={10} firstname="Jane" />
      <UserCard name="John" age={20} city="New York" /> 
      <UserCard name="Jane" age={30} city="Los Angeles" />
      <Toggle />
      <ProductCard productName="Product 1" productPrice={100} isAvailable={true} />
      <ProductCard productName="Product 2" productPrice={200} isAvailable={false} />
    </>
  )
}

export default App
