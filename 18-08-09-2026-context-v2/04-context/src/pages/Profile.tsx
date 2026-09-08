import { useContext } from "react";
import UserContext from "../contexts/UserContext";
export default function Profile() {
    const { firstName, isLoggedIn } = useContext(UserContext);
    if(!isLoggedIn){
        return <h1>Please login to view this page</h1>;
    }
    return (
        <div>
            <h1>Profile</h1>
            <p>Welcome, {firstName}</p>
        </div>
    )
}