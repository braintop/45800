import { createContext, useState } from "react";

interface UserContextType {
    firstName: string;
    isLoggedIn: boolean;
    login: (name: string) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType>({
    firstName: "",
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});


interface UserProviderProps {
    children: React.ReactNode;
}

export function UserProvider({children}: UserProviderProps) {

    const [firstName, setFirstName] = useState<string>("");
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    
    function login(name:string){
        setFirstName(name);
        setIsLoggedIn(true);
    }

    function logout(){
        setFirstName("");
        setIsLoggedIn(false);
    }


    return (
        <UserContext.Provider value={{ firstName, isLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContext;