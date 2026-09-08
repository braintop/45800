import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default function LanguageButton() {
    const { language, changeLanguage } = useContext(LanguageContext);


    return (
        <div>
            <button onClick={() => changeLanguage()}>

            {language === "he" ? "Switch to English" : "עבור לעברית"}

            </button>
        </div>
    )
}