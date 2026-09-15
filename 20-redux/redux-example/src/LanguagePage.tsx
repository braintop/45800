import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from './store/store'
import { setHebrew, setEnglish, setArabic } from './slices/languageSlice'
export default function LanguagePage() {
    const language = useSelector((state: RootState) => state.language.languageValue)
    const dispatch = useDispatch()
    const handleSetHebrew = () => {
        dispatch(setHebrew())
    }
    const handleSetEnglish = () => {
        dispatch(setEnglish())
    }
    const handleSetArabic = () => {
        dispatch(setArabic())
    }
    return (
        <div>
            <h1>Language</h1>
            <p>Language: {language}</p>
            <button onClick={handleSetHebrew}>Set Hebrew</button>
            <button onClick={handleSetEnglish}>Set English</button>
            <button onClick={handleSetArabic}>Set Arabic</button>
        </div>
    )
}