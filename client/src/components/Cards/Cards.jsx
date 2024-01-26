import Card from "../Card/Card";

const Cards = ({ pokemons }) => {

    return (
        <div> 
            <div>

            </div>
            <div>
                <table>
                    
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>NAME</td>
                            <td>POKEMON AND TYPE</td>
                        </tr>
                    </thead>

                    <tbody>
                        {pokemons.map((pokemon)=> 
                            <Card pokemon={pokemon} key={pokemon.id} />
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Cards