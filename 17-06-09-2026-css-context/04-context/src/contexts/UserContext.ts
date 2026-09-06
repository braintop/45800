import { createContext } from "react";

interface UserContextType {
  firstName: string;
  isLoggedIn: boolean;
}

const UserContext = createContext<UserContextType>({
  firstName: "",
  isLoggedIn: false,
});
export default UserContext;