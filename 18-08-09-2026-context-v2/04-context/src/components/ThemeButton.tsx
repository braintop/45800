import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function ThemeButton() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>

            {theme === "light"
                ? "עבור למצב כהה"
                : "עבור למצב בהיר"}

        </button>
    );
}
