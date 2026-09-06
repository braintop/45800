import './App.css';
import Counter from './components/Counter/Counter';
import Box from './components/Box/Box';
import Header from './components/Header/Header';
import UserCard from './components/UserCard/UserCard';
function App() {
  return (
    <div>

    <h1 className="title">hello world</h1>
    <Header />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <UserCard />
    <Counter />
    <Box />
    </div>
  );
}

export default App;