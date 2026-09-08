import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import {Link} from "react-router-dom";
export default function Navbar() {

    const { firstName, isLoggedIn, logout } = useContext(UserContext);//{firstName: string, isLoggedIn: boolean, login: () => void, logout: () => void}


    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", flexDirection: "row"}}>
            
            {isLoggedIn ?(
                <div>
                    <span>Welcome, {firstName}</span>
                    <button onClick={logout}>|Logout</button>
                    <Link to="/profile">|Profile</Link>
                    <Link to="/dashboard">|Dashboard</Link>
                </div>
            ):(
                <div>
                    <span>Please login</span>
                    <Link to="/login">|Login</Link>
                    <Link to="/profile">|Profile</Link>
                    <Link to="/dashboard">|Dashboard</Link>
                </div>
            )
        }
        </div>
    )
}