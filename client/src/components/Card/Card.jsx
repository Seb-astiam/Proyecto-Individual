import { NavLink } from "react-router-dom";
import "./Card.css"

const Card = ({ pokemon }) => {
    const { id, imagen, name, types, Types } = pokemon;


    let typeElements = null;

    if (Array.isArray(Types)) {
        typeElements = Types?.map((type, index) => (
            <p key={index} className={type.name}>{type.name}</p>
        ));
    } else if (typeof types === 'string') {
        const typesArray = types?.split(",").map(type => type.trim());
        typeElements = typesArray.map((typeName, index) => (
            <p key={index} className={typeName}>{typeName}</p>
        ));
    }


    return ( 
        <div>
            <div className={`container-card`}>
            <NavLink to={`/Home/${id}`} className="link-card">
                    <p>
                        No. {isNaN(id) ? 'Creacion' : id} <strong>{name?.toUpperCase()}</strong>
                    </p>
                </NavLink>
                <img src={imagen} alt="Imagen" className="imagen-card" />
                <div className="row-p">
                    {typeElements}
                </div>
            </div>
        </div>
    )
}

export default Card