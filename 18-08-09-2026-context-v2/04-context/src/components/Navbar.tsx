import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import {Link} from "react-router-dom";
import CartContext from "../contexts/CartContext";
export default function Navbar() {

    const { firstName, isLoggedIn, logout } = useContext(UserContext);//{firstName: string, isLoggedIn: boolean, login: () => void, logout: () => void}
    const { cartItems } = useContext(CartContext);

    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", flexDirection: "row"}}>
            
            {isLoggedIn ?(
                <div>
                    <span>Welcome, {firstName}</span>
                    <button onClick={logout}>| Logout</button>
                    <Link to="/profile">| Profile</Link>
                    <Link to="/dashboard">| Dashboard</Link>
                    <span>Cart: {cartItems.length} |</span>
                    <Link to="/product-list">|Product List</Link>
                </div>
            ):(
                <div>
                    <span>Please login</span>
                    <Link to="/login">|Login</Link>
                    <Link to="/profile">|Profile</Link>
                    <Link to="/dashboard">|Dashboard</Link>
                    <Link to="/product-list">|Product List</Link>
                </div>
            )
        }
        </div>
    )
}