import "./About.css"
import { AboutText } from "./Text"

function About() {
  return (
    <main id="about">

        <h1>Kilka słów o mnie.</h1>
        {AboutText.map((paragraph) => (
            <p key={paragraph.id}>{paragraph.text}</p>
        ))}
    </main>
  )
}

export default About