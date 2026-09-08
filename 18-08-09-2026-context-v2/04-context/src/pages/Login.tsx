import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [userName, setUserName] = useState<string>("");
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    
    function handleLogin(){
        login(userName);
        setUserName("");
        navigate("/dashboard");
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Enter your name" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}