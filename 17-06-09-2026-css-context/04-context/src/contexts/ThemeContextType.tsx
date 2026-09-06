import { createContext } from "react";
interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: (theme: string) => {},
});
export default ThemeContext;