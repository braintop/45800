import { Link } from 'react-router-dom'
export default function Users() {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Jim' },
    ]
    return (
        <div>
            <h1>Users</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <Link to={`/user/${user.id}`} key={user.id}>{user.name}</Link>
                </div>
            ))}
        </div>
    )
}