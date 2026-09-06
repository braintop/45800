import UserContext from "../contexts/UserContext";
import { useContext } from "react";
export default function Contacts() {
    
  const { firstName, isLoggedIn } = useContext(UserContext);//{firstName: string, isLoggedIn: boolean}
  
  //const firstName = useContext(UserContext).firstName;
  //const isLoggedIn = useContext(UserContext).isLoggedIn;
  
  
  
  const user = useContext(UserContext);//{firstName: string, isLoggedIn: boolean}
  
  
  
  
  
  return (
        <div>
            <h1>Contacts</h1>
            <p>FirstName: {user.firstName}</p>
            <p>IsLoggedIn: {user.isLoggedIn ? "Yes" : "No"}</p>
            <p>FirstName: {firstName}</p>
            <p>IsLoggedIn: {isLoggedIn ? "Yes" : "No"}</p>
        </div>
    )
}