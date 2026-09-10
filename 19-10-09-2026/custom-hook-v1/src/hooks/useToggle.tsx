import { useState } from "react";

export default function useToggle(initialValue: boolean = false) {
    const [value, setValue] = useState(initialValue);

    function toggle() {
        setValue((prev) => !prev);
    }

    return {value, toggle };
}