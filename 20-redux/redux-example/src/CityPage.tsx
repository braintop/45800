import { useDispatch } from "react-redux"
import { changeCity } from "./slices/citySlice"
import { useSelector } from "react-redux"
import type { RootState } from "./store/store"
export default function CityPage() {

    const dispatch = useDispatch()
    const cityValue = useSelector((state: RootState) => state.city.cityValue)


    function handleCityChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(changeCity(e.target.value))
    }
    return (
        <div>
            <h1>City Page</h1>

            <input type="text" value={cityValue} onChange={handleCityChange} />
        </div>
    )
}