import About from "./components/About/About"
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import './App.css';
import Background from "./components/utils/Background"
function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Background>
        <About />
        <Skills />
        <Projects />
      </Background>
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
