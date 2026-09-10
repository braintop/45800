import { useDocumentTitle } from '../hooks/useDocumentTitle'
import FastSearch from '../components/FastSearch'
import InputItem from '../components/InputItem'
export const About = () => {
    useDocumentTitle('About')
    return (
        <div>

            <h1>About</h1>
            <FastSearch />
            <InputItem />
        </div>
    );
};