import Nav from "./components/nav/Nav"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import "./Main.css"

function App() {

  return (
    <>
        <Nav></Nav>
        
      <div className="container">
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
