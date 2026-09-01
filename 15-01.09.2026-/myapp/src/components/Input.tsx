import { useState } from 'react';

export default function Input() {
    const [value, setValue] = useState('john');

    function handleChnage(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e);
        console.log(e.target)
        console.log(e.target.value)
        let v = e.target.value;
        setValue(v);
    }

    function handleClick(e: React.MouseEvent<HTMLParagraphElement>) {
        console.log(e);
        console.log(e.target)// <p>click me</p>
    }
  return (
    <div>
      <input type="text"  onChange={handleChnage} />

      <p onClick={handleClick}>click me</p>

      <p>hi {value}</p>
    </div>
  );
}