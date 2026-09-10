import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function Header() {

    const { theme } = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
                padding: "20px"
            }}
        >

            <h1>My Website</h1>

        </div>
    );
}

