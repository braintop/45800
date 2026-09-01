import { useState } from "react"

interface SignupFormData {
    firstname: string
    email: string
    age: string
  }
  export default function SignupForm() {
    const [form, setForm] = useState<SignupFormData>({
      firstname: '',
      email: '',
      age: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ): void => {  
       // console.log(form);
       // console.log(e.target.name, e.target.value) 
       //       return
        console.log({...form,[e.target.name]: e.target.value})
      setForm({...form,[e.target.name]: e.target.value})
    }

    //{name: 'John', email: 'john@example.com', age: '20', age: '30'}
    function f1(e: React.ChangeEvent<HTMLInputElement>){
      console.log(e.target.name, e.target.value)
    }
    const handleChange2 = function(e: React.ChangeEvent<HTMLInputElement> )  {  
      // console.log(form);
      // console.log(e.target.name, e.target.value) 
      //       return
       console.log({...form,[e.target.name]: e.target.value})
     setForm({...form,[e.target.name]: e.target.value})
   }

  
  
    return (
      <form>
        <input name="firstname" value={form.firstname} onChange={handleChange} />
        <input name="email" value={form.email} onChange={handleChange} />
        <input name="age" value={form.age} onChange={handleChange} />
      </form>
    )
  }