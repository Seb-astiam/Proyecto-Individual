import { NavLink } from "react-router-dom"

import "./Landing.css"
import pokeImagen from "../../assets/PokeImagen.png" 


const Landing = () => {

    return (
        <div className="fondo">
            <img src={pokeImagen} className="imagen"/>
            <h1 className="titulo">WebApi creada por Sebastian Agudelo</h1>
            <button className="boton"><NavLink to="/Home" className="link">Home</NavLink></button>
        </div>
    )
}

export default Landing