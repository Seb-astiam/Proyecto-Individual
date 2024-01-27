import axios from "axios";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../../Redux/pokeSlice";

import "./Detail.css"
import useHome from "../../Hooks/useHome";
import Card from "../../components/Card/Card";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemon.pokemonDetail);

    const pokemons = useHome();

    const pokemonesFiltrados = pokemons.filter(poke => poke.id !== parseInt(id));

    let numPokes;
    if (parseInt(id) === 1) {
        numPokes = pokemonesFiltrados.slice(parseInt(id)-1, parseInt(id) + 4);
    } else if (parseInt(id) === 2) {
        numPokes = pokemonesFiltrados.slice(parseInt(id) - 2, parseInt(id) + 3);
    } else {
        numPokes = pokemonesFiltrados.slice(parseInt(id) - 3, parseInt(id) + 1);
    }
    


    useEffect(()=> {
        const fetchData = async () => {
            try {
            const responseBack = await axios.get(`http://localhost:3001/pokemons/${id}`);
            dispatch(getPokemonById(responseBack.data));
            }
            catch (error) {
                console.error("fallo peticion para detail", error);
            }
        } 

        fetchData();

        return () => {
            dispatch(getPokemonById(null));
        };

    }, [id])

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    const { name, imagen, stats, height, weight, types } = pokemon;

    return (
        <div className="container-detail">

            <div className="detail">
                <h1>#{id}</h1>
                <img src={imagen}/>
                <h1>{name}</h1>
                <p><strong>Weight:</strong> {weight} , <strong>Height:</strong> {height} </p>
                <NavLink to="/Home">Home</NavLink>
            </div>

            <div className="P">
                {numPokes.map((poke)=> 
                    <Card key={poke.id}  pokemon={poke} className={poke.id < parseInt(id) ? 'red-border' : 'green-border'} />
                )}
            </div>

        </div>

    )
}

export default Detail;
