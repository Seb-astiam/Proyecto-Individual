import { getPokemonByName } from "../../Redux/pokeSlice";

import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import NotFound from "../notFound/notFound";
import Nav from "../../components/Nav/Nav";

import { useDispatch } from "react-redux";
import { useState } from "react"
import Select from "react-select";

import useHome from "../../Hooks/useHome";
import useTypes from "../../Hooks/useTypes";

import axios from "axios";

import "./Home.css"
import imagenHome from "./imagen-home.png"

const Home = () => {
    const pokemons = useHome();
    const types = useTypes()
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const [notFound, setNotFound] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNotFound(false);
        try {
            const responseBackend = await axios.get(`http://localhost:3001/pokemons?name=${search}`);
            dispatch(getPokemonByName(responseBackend.data));
            
        } catch (error) {
            setNotFound(true);
            console.error("Error fetching information:", error.message);
        }
    }

    return (
        <div className="container-home">
            <img src={imagenHome} />
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}  />
            <Nav />
            <Select 
                options = { types }
             />
            {notFound ? <NotFound /> : (pokemons.length > 0 ? <Cards pokemons={pokemons} /> : <p>Cargando...</p>)}
        </div>
    )
}

export default Home;
