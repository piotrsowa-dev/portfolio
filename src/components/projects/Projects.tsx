import "./Projects.css"
import Prcard from "./Prcard"
import { prconfs } from "./Prconf"


function Projects() {
  return (
    <>
    <h1 id="portfolio" className="consh1name">Wybrane projekty</h1>
    <div className="project-con" >
      {prconfs.map((confpr) =>(
        <Prcard key={confpr.id} {...confpr} />
      ))}
        
    </div>
    </>
  )
}

export default Projects