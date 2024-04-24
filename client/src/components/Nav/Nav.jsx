import { NavLink } from "react-router-dom"

import "./Nav.css";

const Nav = () => {
    return (
        <div className="container-Nav">
            <NavLink className="Nav-link btn" to="/">Landing</NavLink>
            <NavLink className="Nav-link btn" to="/Create">Create</NavLink>
        </div>
    )
}

export default Nav