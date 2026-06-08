import Nav from "./components/nav/Nav"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import "./Main.css"

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }, []);

  return (
    <>
      <Nav></Nav>
      <div className="container">
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>

    </>
  )
}

export default App
