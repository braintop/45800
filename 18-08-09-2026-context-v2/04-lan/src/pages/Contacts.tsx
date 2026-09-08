import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default function Contacts() {
    const { language } = useContext(LanguageContext);

    return (
        <div>
            <h1>Contacts</h1>
            <h2>
                {language === "he" ? "צור קשר" : "Contact Us"}
            </h2>
            <p>
                <input type="text" placeholder={language === "he" ? "שם" : "Name"} />
                <input type="email" placeholder={language === "he" ? "אימייל" : "Email"} />
                <input type="text" placeholder={language === "he" ? "טלפון" : "Phone"} />
                <button>{language === "he" ? "שליחה" : "Send"}</button>

            </p>
        </div>
    )
}