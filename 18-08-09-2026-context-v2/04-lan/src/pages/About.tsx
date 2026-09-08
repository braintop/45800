import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
export default function About() {
    const { language } = useContext(LanguageContext);
    return (
        <div> 
            <h2> {language === "he" ? "אודות" : "About"} </h2>
            <p> {language === "he" ? "זהו אתר לדוגמה שנבנה באמצעות React." : "This is an example website built with React."} </p>
        </div>
    )
}