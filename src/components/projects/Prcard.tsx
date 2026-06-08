import "./Projects.css"
import { Icon } from "@iconify/react";
type CardProps ={
    image: string;
    name: string;
    description: string;
    data: string;
    livedemolink: string;
    codelink: string;
}

const Prcard =({ image, name, description, data, livedemolink, codelink}: CardProps) =>{

    return(
        <>
            <div className="project"  data-aos="fade-up" data-aos-delay="200">
                <img src={`${image}`} alt=""  />
                <h2>{name}</h2>
                <p>{description}</p>
                <p className="year">{data}</p>
                <div className="addons">
                    <a className="preview" href={`${livedemolink}`} target="_blank">Live Demo <Icon className="icon" icon="mingcute:github-line" height="22px" /></a>
                    <a className="code" href={`${codelink}`} target="_blank">Code <Icon className="icon" icon="material-symbols:link" height="22px" /></a>
                </div>

            </div>
        </>
    )

}



export default Prcard