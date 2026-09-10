import useFetch from '../hooks/useFetch';
import { useDocumentTitle } from '../hooks/useDocumentTitle'
export default function Users() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
    useDocumentTitle('Users')
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {data.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}