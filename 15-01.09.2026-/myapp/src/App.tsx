
import SignupForm from './components/SignupForm'
import Exe1Form from './components/Exe1Form'
import Exe2Form from './components/Exe2Form'
import StudentList from './components/StudentList'
import { CountAsk } from './components/CountAsk'
function App() {
   
  return (
    <>
      <h1>SignUpForm</h1>
      <SignupForm />
      <h1>Exe1</h1>
      <Exe1Form />


      <h1>Exe2</h1>
      <Exe2Form />
      <StudentList />

      <h1>CountAsk</h1>
      <CountAsk />
    </>
  )
}

export default App
