import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import UserContext from "./contexts/UserContext";
function App() {

   
  
  return (
    <div>

      <h1>Hello World</h1>
      <UserContext.Provider value={{ firstName: "asaf",  isLoggedIn: false }}>
          <Home />
          <Contacts />
          <About />
        </UserContext.Provider>
    </div>

  );
}
export default App;