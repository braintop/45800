import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";

export default function Navbar() {
  const { firstName, isLoggedIn, logout } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {isLoggedIn ? (
        <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#fff" }}>
          <span>Welcome, {firstName}</span>
          <button
            onClick={logout}
            style={{
              background: "transparent",
              border: "1px solid #fff",
              color: "#fff",
              padding: "4px 10px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
          <Link to="/profile" style={{ color: "#fff", textDecoration: "none" }}>
            Profile
          </Link>
          <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
            Dashboard
          </Link>
          <span style={{ color: "white", textDecoration: "none" }}>Cart: {cartItems.length}</span>
          <Link to="/product-list" style={{ color: "#fff", textDecoration: "none" }}>
            Product List
          </Link>
          <Link to="/movies-list" style={{ color: "#fff", textDecoration: "none" }}>
            Movies List
          </Link>
          <Link to="/add-movie" style={{ color: "#fff", textDecoration: "none" }}>
            Add Movie
          </Link>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#fff" }}>
          <span>Please login</span>
          <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
            Login
          </Link>
          <Link to="/profile" style={{ color: "#fff", textDecoration: "none" }}>
            Profile
          </Link>
          <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
            Dashboard
          </Link>
          <span style={{ color: "#fff" }}>Cart: {cartItems.length}</span>
          <Link to="/product-list" style={{ color: "#fff", textDecoration: "none" }}>
            Product List
          </Link>
          <Link to="/movies-list" style={{ color: "#fff", textDecoration: "none" }}>
            Movies List
          </Link>
          <Link to="/add-movie" style={{ color: "#fff", textDecoration: "none" }}>
            Add Movie
          </Link>

        </div>
      )}
    </nav>
  );
}
