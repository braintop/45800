import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
interface IUser {
    id: number,
    name:string,
    phone:string,
    email:string,
    website:string,
}
export default function Users() {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState<IUser[]>([])

    //console.log('Out Users component mounted')
    async function getUsers() {
        let apiUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        let data:IUser[] = await apiUsers.json()
        setUsers(data)
        console.log(data)
    }
    useEffect (() => {
        getUsers()
        console.log('Users component mounted')
    },[])
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li style={{border: '1px solid black', padding: '10px', margin: '10px'}} key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                    </li>
                ))}
            </ul>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}