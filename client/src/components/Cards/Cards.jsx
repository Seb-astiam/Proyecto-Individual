import Card from "../Card/Card";

import "./Cards.css"

const Cards = ({ pokemons }) => {

    return (
        <div className="container-cards"> 
            {pokemons.map((pokemon)=> 
                <Card pokemon={pokemon} key={pokemon.id} />
            )}
        </div>
    )
}

export default Cards