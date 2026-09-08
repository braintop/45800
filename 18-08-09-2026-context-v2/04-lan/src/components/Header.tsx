import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default function Header() {
    const { language } = useContext(LanguageContext);
    return (
        <div>
            <h1>{language === "he" ? "שלום" : "Hello"}</h1>
        </div>
    )
}