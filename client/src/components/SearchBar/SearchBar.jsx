import useTypes from "../../Hooks/useTypes";

import "./SearchBar.css"

const SearchBar = ({ handleChange, handleSubmit, filterTypes, orderName, filterDbOrApi }) => {
    const types = useTypes();

    return (
        <div className="container-searchBar">

            <form type="search" className="search">
                <input className="input" placeholder="search" type="search" onChange={handleChange}></input>
                <button className="btn" type="submit" onClick={handleSubmit}>Search</button>
            </form>



            <div className="container-btn">
                <label htmlFor="type-select" className="label-search">Choose a type:</label>

                <select name="types" id="type-select" onChange={(e) => e.target.value === "A" || e.target.value === "Z" ? orderName(e.target.value) : filterTypes(e.target.value)}>
                    <option value="">All types</option>
                    <option value="A">A - Z</option>
                    <option value="Z">Z - A</option>
                        {types.map((type) => 
                            <option key={type.id} value={type.name}>
                                {type.name}
                            </option>
                        )}
                </select>

                <select name="pokemons" id="pokemons-select" onChange={(e) => filterDbOrApi(e.target.value)}>
                    <option value="All">All Pokemons</option>
                    <option value="BD">BD</option>
                    <option value="API">API</option>
                </select>
            </div>

        </div>
    )
}

export default SearchBar