import { getPokemonByName } from "../../Redux/pokeSlice";
import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import { useDispatch } from "react-redux";
import { useState } from "react"
import useHome from "../../Hooks/useHome";
import axios from "axios";
import NotFound from "../notFound/notFound";

const Home = () => {
    const pokemons = useHome();
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
        <div>
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />

            {notFound ? <NotFound /> : (pokemons.length > 0 ? <Cards pokemons={pokemons} /> : <p>Cargando...</p>)}
        </div>
    )
}

export default Home;
