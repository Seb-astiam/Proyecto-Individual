import { NavLink } from "react-router-dom";
import "./Card.css"

const Card = ({ pokemon }) => {
    const { id, imagen, name, types } = pokemon;

    return ( 
        <div>
            <div className={`container-card`}>
                <NavLink to={`/Home/${id}`} className="link-card"><p >No.{id} <strong>{name.toUpperCase()}</strong></p></NavLink>
                <img src={imagen} alt="Imagen" className="imagen-card" />
                <div className="row-p">
                    <p className={types?.split(",")[0]}>{types?.split(",")[0]}</p><p className={types?.split(",")[1]}>{types?.split(",")[1]}</p>
                </div>
            </div>
        </div>
    )
}

export default Card