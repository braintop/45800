import { useSelector } from "react-redux"
import type { RootState } from "./store/store"
export default function DisplayUser() {
    const users= useSelector((state: RootState) => state.user2.users)
    return (
        <div>
            <h1>Display User</h1>
            {users.map((user:any) => (
                <div key={user.id}>
                    <h2>{user.firstname}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}