import './App.css'
import { useState } from 'react';
function App() {
  //1.declare a variable
  let firstName: string = "John"
  //let count: number = 0;
  //2. declare a function
  const [count, setCount] = useState(0);//erurn [value, setValue]
  
  
  function greetUser(name: string): string {
    return `Hello ${name}`
  }
  
  function incrementCount(): void {
    //count++;
    setCount(count + 1);
    //alert(count);
  }

  //3. declare a component
  return (
    <>
      <h1 className="name">Hello World</h1>
      <p>hello {firstName}</p>
      <p>hello {greetUser(firstName)}</p>
      <button onClick={incrementCount}>Increment</button>
      <p>Count: {count}</p>
    </>
  )
}

export default App
