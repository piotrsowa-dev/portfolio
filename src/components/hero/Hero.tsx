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
            <div className="left-hero" >
                <h4  data-aos="fade-up" data-aos-delay="0" >Cześć, jestem</h4>
                <h1  data-aos="fade-up" data-aos-delay="300" >Piotr Sowa</h1>
                <h2  data-aos="fade-up" data-aos-delay="400" >Frontend Developer</h2>
                <p  data-aos="fade-up" data-aos-delay="500" >Tworzę nowoczesne strony i projekty webowe, skupiając się na przejrzystym designie, responsywnych layoutach oraz customowym UI.</p>
            </div>
            <div className="right-hero" >
                <h1 data-aos="fade-up" data-aos-delay="600">Tech Stack</h1>

            <div className="techs" data-aos="fade-in" data-aos-delay="1000">
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