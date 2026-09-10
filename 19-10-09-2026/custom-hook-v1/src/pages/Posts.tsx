import useFetch from '../hooks/useFetch';
import { useDocumentTitle } from '../hooks/useDocumentTitle'
export default function Posts() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
    useDocumentTitle('Posts')
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}