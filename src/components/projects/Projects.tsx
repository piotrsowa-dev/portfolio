import "./Projects.css"
import Prcard from "./Prcard"
import { prconfs } from "./Prconf"


function Projects() {
  return (
    <>
    <h1 id="portfolio" className="consh1name" data-aos="fade-in" data-aos-duration="1000">Wybrane projekty</h1>
    <div className="project-con">
      {prconfs.map((confpr) =>(
        <Prcard key={confpr.id} {...confpr} />
      ))}
        
    </div>
    </>
  )
}

export default Projects