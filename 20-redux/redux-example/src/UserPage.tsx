import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { changeFirstname, changeLastname } from "./slices/userSlice";

function UserPage() {

  const firstname = useSelector((state: RootState) => state.user.firstname)
  const lastname = useSelector((state: RootState) => state.user.lastname)

  const dispatch = useDispatch();
    function handleFirstnameChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(changeFirstname(e.target.value))
    }
  return (
    <div>
      <h2>Name: {firstname} {lastname}</h2>
      <input type="text" value={firstname} onChange={handleFirstnameChange} />
      <input type="text" value={lastname} onChange={(e) => dispatch(changeLastname(e.target.value))} />
    </div>
  );
}

export default UserPage;