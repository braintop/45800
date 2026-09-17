import { useEffect, useState } from 'react'
function App() {

  const [persons, setPersons] = useState([])
  async function getAllPersons() {
   let response = await fetch('http://localhost:3000/persons')
   let data = await response.json()
   console.log(data)
   setPersons(data)
  }
  useEffect(() => {
    getAllPersons()

  }, [])
  return (
    <>
    <h1>Hello World</h1>
    {persons.map((person) => (
      <div key={person.id}>
        <h2>{person.name}</h2>
        <p>{person.age}</p>
      </div>
    ))}
    </>
  )
}

export default App
