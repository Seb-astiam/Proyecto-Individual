import { NavLink } from "react-router-dom"

import img404 from "./img404.png"
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="container-notFound">
            <img src={img404} className="img404" />
            <h1 className="texto-notfound">Not Found 404</h1>
            <NavLink to="/" className="link-notfound">Back to landing</NavLink>
        </div>
    )
}

export default NotFound