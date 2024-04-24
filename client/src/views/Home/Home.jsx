import { getPokemonByName, filterPokemonType } from "../../Redux/pokeSlice";

import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import NotFound from "../notFound/notFound";
import Nav from "../../components/Nav/Nav";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"

import useHome from "../../Hooks/useHome";

import axios from "axios";

import "./Home.css"
import imagenHome from "../../assets/imagen-home.png"

const Home = () => {
    const pokemons = useHome();
    const filterPokemon = useSelector((state) => state.pokemon.filterPokemon);


    useEffect(() => {
        const estadoCompartido = () => {
          dispatch(filterPokemonType(pokemons))
        }
    
        estadoCompartido()
      }, [pokemons]);

    const [search, setSearch] = useState("");
    const [notFound, setNotFound] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.value
        setSearch(name.toLowerCase());
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setNotFound(false);
        try {
            const responseBackend = await axios.get(`http://localhost:3001/pokemons?name=${search}`);
            const uno = responseBackend.data.filter((response) => response.id && response.imagen);
            dispatch(getPokemonByName(uno));
            
        } catch (error) {
            setNotFound(true);
            console.error("Error fetching information:", error.message);
        }
    }

    const filterTypes = (type) => {
        if(type) {
            const search = pokemons.filter((pokemon) => pokemon.types?.includes(type));
            dispatch(filterPokemonType(search));
        } else {
            dispatch(filterPokemonType([...pokemons]))
        }

    }

    const orderName = (A) => {
        if (A === "A") {
            const order = [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
            dispatch(filterPokemonType(order));
        } else {
            const order = [...pokemons].sort((a, b) => b.name.localeCompare(a.name));
            dispatch(filterPokemonType(order));
        }
    }

    const filterDbOrApi = (props) => {
        if (props === "BD") {
            const filterDb = [...pokemons].filter((pokemon) => isNaN(pokemon.id));
            dispatch(filterPokemonType(filterDb))
        } 
        else if (props === "API") {
            const filterApi = [...pokemons].filter((pokemon) => typeof pokemon.id === 'number');
            dispatch(filterPokemonType(filterApi));
        } else {
            dispatch(filterPokemonType([...pokemons]))
        }
    }



    return (
        <div className="container-home">
            <img src={imagenHome} />
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} filterTypes={filterTypes} orderName={orderName} filterDbOrApi={filterDbOrApi} />
            <Nav />
            {notFound ? <NotFound /> : (filterPokemon.length > 0 ? <Cards pokemons={filterPokemon} /> : <p>Cargando...</p>)}
        </div>
    )
}

export default Home;
