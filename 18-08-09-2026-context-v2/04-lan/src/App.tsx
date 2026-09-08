import LanguageButton from "./components/LanguageButton";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import { LanguageProvider } from "./contexts/LanguageContext";
function App() {

  
  
  return (
    <div>
      <LanguageProvider>
          <LanguageButton />
          <Header />
          <Contacts />
          <About />
      </LanguageProvider>
    </div>

  );
}
export default App;