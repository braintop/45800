import UserContext from "../contexts/UserContext";
import { useContext } from "react";
export default function Home() {

  const { firstName, isLoggedIn } = useContext(UserContext);
    return (
        <div>
            <h1>Home</h1>
            <p>FirstName: {firstName}</p>
            <p>IsLoggedIn: {isLoggedIn ? "Yes" : "No"}</p>
        </div>
    )
}