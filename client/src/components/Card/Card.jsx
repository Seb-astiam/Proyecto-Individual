import { NavLink } from "react-router-dom";
import "./Card.css"

const Card = ({ pokemon }) => {
    const { id, imagen, name, types } = pokemon;

    const typeNames = types.map(type => type.type.name);
    
    

    return ( 
        <div className="container-card">
            <img src={imagen} alt="Imagen" />
            <NavLink to={`/Home/${id}`}><p>#{id} <strong>{name}</strong></p></NavLink>
            <p className="type"> {typeNames.join("  ")} </p>
        </div>
    )
}

export default Card