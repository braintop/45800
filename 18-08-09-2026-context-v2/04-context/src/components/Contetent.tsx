import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function Content() {

    const { theme } = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
                padding: "20px"
            }}
        >

            <h2>Welcome to my website</h2>

            <p>This website uses Theme Context.</p>

        </div>
    );
}
