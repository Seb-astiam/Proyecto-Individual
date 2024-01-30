import { useEffect, useState } from "react";
import Card from "../Card/Card";

import "./Cards.css"

const Cards = ({ pokemons }) => {
     const [numberPage, setNumberPage] = useState(1);

     useEffect( ()=> {
        setNumberPage(1)
    }, [pokemons.length])

     const NumPokemonsPage = 14;

     const lastIndex = numberPage * NumPokemonsPage;
     const firstIndex = lastIndex - NumPokemonsPage;

     const newArrPokemons = pokemons.slice(firstIndex, lastIndex);

     const totalPages = Math.ceil(pokemons.length / NumPokemonsPage);

     const nextPage = () => {
        setNumberPage(numberPage + 1);
     }

     const prevPage = () => {
        setNumberPage(numberPage - 1);
     }

    return (
        <div className="container-page">

            <h2 className="numberPage">Pagina {numberPage} de {totalPages}</h2>

            <div className="row" >
                <button onClick={prevPage} disabled={numberPage === 1} className="btn-cards">PREV</button>

                <div className="container-cards"> 
                    {newArrPokemons.map((pokemon)=> 
                        <Card pokemon={pokemon} key={pokemon.id} />
                    )}
                </div>

                <button onClick={nextPage} disabled={numberPage === totalPages} className="btn-cards">NEXT</button>
            </div>

        </div>
    )
}

export default Cards