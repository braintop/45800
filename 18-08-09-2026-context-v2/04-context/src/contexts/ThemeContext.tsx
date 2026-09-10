import { createContext, useState } from "react";

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {}
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState("light");

    function toggleTheme() {

        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }

    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;

