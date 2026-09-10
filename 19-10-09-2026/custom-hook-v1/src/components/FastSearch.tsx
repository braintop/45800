import { useState, useMemo } from "react";

export default function FastSearch() {
    const [search, setSearch] = useState("");

    function createNumbersArray() {
        let numbers:string[] = [];
        for (let i = 0; i < 30; i++) {
            numbers.push(i.toString());
        }
        return numbers;
    }
    //createNumbersArray();
    const numbersArray:string[] = useMemo(() => {
        return createNumbersArray();
    }, []);

    let visibleNumbers = useMemo(() => {
        return numbersArray.filter((number: string) => number.toString().includes(search));
    }, [search]);




    return (
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            <div>
                {visibleNumbers.map((number: string) => (
                    <div key={number}>{number}</div>
                ))}
            </div>
        </div>
    );
}