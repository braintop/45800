import { useParams } from 'react-router-dom'
export default function User() {
    const { id } = useParams()//{id: '1'}
    return (
        <div>
            <h1>User {id}</h1>

        </div>
    )


}



// let person={
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }

// let {name, city, age} = person

// const name = person.name
// const age = person.age
// const city = person.city

// console.log(name, age, city)