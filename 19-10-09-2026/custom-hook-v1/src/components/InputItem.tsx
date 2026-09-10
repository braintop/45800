import {useRef} from 'react';
export default function InputItem() {
    const inputRef = useRef<HTMLInputElement>(null);

    function focusInput() {
        inputRef.current?.focus();
        inputRef.current!.style.color = 'red';
        inputRef.current!.style.backgroundColor = 'blue';
    }

    function clearInput() {

        if (inputRef.current) {

            inputRef.current.value = "";
            inputRef.current.focus();


        }

    }
    function showInput() {
        alert(inputRef.current?.value);
    }

    return(
        <>
        <h1>InputItem</h1>
        <input type="text" ref={inputRef} />

        <button onClick={focusInput}>Focus Input</button>
        <button onClick={clearInput}>Clear Input</button>
        <button onClick={showInput}>show value</button>
        </>
    ) 



    
}