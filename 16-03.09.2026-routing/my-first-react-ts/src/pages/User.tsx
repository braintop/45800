import { useParams } from 'react-router-dom'
export default function User() {
    const { id } = useParams()//{id: '1'}
    return (
        <div>
            <h1>User {id}</h1>

        </div>
    )


}