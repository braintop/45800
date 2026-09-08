import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import MoviesList from "./pages/MoviesList";
import AddNewMovie from "./pages/AddNewMovie";
import { MovieProvider } from "./contexts/MovieContext";
function App() {

  
  
  return (
    <div>
      <Navbar />
      <MovieProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/movies-list" element={<MoviesList />} />
        <Route path="/add-movie" element={<AddNewMovie />} />
      </Routes>
      </MovieProvider>
    </div>

  );
}
export default App;