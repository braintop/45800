import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
function App() {

  
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
    </div>

  );
}
export default App;