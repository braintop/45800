interface UserCardProps {
  name: string,
  age: number,
  city: string,
}
export default function UserCard(props: UserCardProps) {
  return (
    <div>
      <h1>UserCard</h1>
      <p>Hello Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  )
}
