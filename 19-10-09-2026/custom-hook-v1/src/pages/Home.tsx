import { useDocumentTitle } from '../hooks/useDocumentTitle'
export const Home = () => {
    useDocumentTitle('Home')
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};