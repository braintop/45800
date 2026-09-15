import { useSelector } from 'react-redux'
import type { RootState } from './store/store'
export default function Stam() {
    const language = useSelector((state: RootState) => state.language.languageValue)
        return (
            <div>
                <h1>Stam</h1>
                <p>Stam: {language}</p>
            </div>
        )
    }