import { useState } from "react";

export default function ToggleText(){

    const [isVisible, setIsVisible] = useState(false);
    let message =  isVisible ? "Hello world" : ""; // : אחרת 


    return(
        <div>
            <p>{message}</p>
            <button onClick={() => setIsVisible(!isVisible)}>Toggle Text</button>
            
        </div>
    )
}