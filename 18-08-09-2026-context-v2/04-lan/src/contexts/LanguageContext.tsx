import { createContext, useState } from "react";
interface LanguageContextType {
    language: string;
    changeLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
    language: "English",
    changeLanguage: () => {},
});
interface LanguageProviderProps {

    children: React.ReactNode;

}


export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState("English");

    const changeLanguage = () => {
        if (language === "en") {
            setLanguage("he");
        } else {
            setLanguage("en");
        }
    }


    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
export default LanguageContext;