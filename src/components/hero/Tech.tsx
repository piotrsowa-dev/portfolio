import "./Hero.css"
type TechProps ={
    name: string;
    date: string;
    isActive: boolean;
    onClick: () => void;
}

const Tech = ({ name, date, isActive, onClick }: TechProps) => {

    return(
        <span onClick={onClick} className={`tech ${isActive ? "active" : ""}`}>
            {isActive ? date : name}
        </span>
    )
}



export default Tech