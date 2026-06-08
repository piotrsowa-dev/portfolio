import "./About.css"
import { AboutText } from "./Text"

function About() {
  return (
    <main id="about" data-aos="fade-up">

        <h1   >Kilka słów o mnie.</h1>
        {AboutText.map((paragraph) => (
            <p  data-aos="fade-in"  key={paragraph.id}>{paragraph.text}</p>
        ))}
    </main>
  )
}

export default About