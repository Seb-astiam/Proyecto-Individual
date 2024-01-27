import { NavLink } from "react-router-dom"

import "./Landing.css"
import pokeImagen from "../../assets/PokeImagen.png" 


const Landing = () => {

    return (
        <div className="fondo">
            <img src={pokeImagen} className="imagen"/>
            <h1 className="titulo">WebApi creada por Sebastian Agudelo</h1>
            <NavLink to="/Home" className="link">Enter</NavLink>
        </div>
    )
}

export default Landing