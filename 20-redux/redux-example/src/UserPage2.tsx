import { useDispatch } from "react-redux"
import { addUser, clearUsers } from "./slices/userSlice2"
import { useState } from "react"

export default function UserPage2() {
    const dispatch = useDispatch()
    const [firstname, setFirstname] = useState("")
    const [email, setEmail] = useState("")

    function handleFirstnameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFirstname(e.target.value)
    }
    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }

    function handleSubmit() {
        dispatch(addUser({ id: Math.floor(Math.random()*1000), firstname: firstname, email: email }))
        setFirstname("")
        setEmail("")
    }

    return (
        <div>
            <h1>User Page 2</h1>
            <input type="text" placeholder="Firstname" onChange={handleFirstnameChange}/>
            <input type="text" placeholder="Email" onChange={handleEmailChange}/>
            <button onClick={handleSubmit}>Add User</button>
            <button onClick={() => dispatch(clearUsers())}>Clear Users</button>
        </div>
    )
}