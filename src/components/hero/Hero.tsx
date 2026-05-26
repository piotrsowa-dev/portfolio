import { useState } from "react";
import { TechStack } from "./config"
import Tech from "./Tech"
import "./Hero.css"

function Hero() {

    const[activeTech, setActiveTech] = useState<number | null>(null);
    const handleTechClick = (id: number) => {
        setActiveTech(prev => prev === id ? null : id);
    }
 

  return (
    <>
        <div className="hero-container">
            <div className="left-hero">
                <h4>Cześć, jestem</h4>
                <h1>Piotr Sowa</h1>
                <h2>Frontend Developer</h2>
                <p>Tworzę nowoczesne strony i projekty webowe, skupiając się na przejrzystym designie, responsywnych landing page’ach oraz customowym UI do gier.</p>
            </div>
            <div className="right-hero">
                <h1>Tech Stack</h1>

            <div className="techs">
                {TechStack.map((stack) =>(
                    <Tech 
                    key={stack.id} 
                    name={stack.name}
                    date={stack.date}
                    isActive={activeTech === stack.id}
                    onClick={() => handleTechClick(stack.id)}

                     />
                ))}
            </div>

            </div>

        </div>

       </> 
  )
}

export default Hero