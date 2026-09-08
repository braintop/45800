import { useContext } from "react";
import UserContext from "../contexts/UserContext";
export default function Dashboard() {
    const { isLoggedIn, firstName } = useContext(UserContext);
    if(!isLoggedIn){
        return <h1>Please login to view this page</h1>;
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {firstName}</p>
        </div>
    )
}