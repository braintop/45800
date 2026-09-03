import { useParams } from 'react-router-dom'
export default function Todo() {
    const { id } = useParams()//{id: '1'}
    return (
        <div>
            <h1>Todo {id}</h1>

        </div>
    )


}
