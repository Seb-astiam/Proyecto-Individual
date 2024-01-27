import "./SearchBar.css"

const SearchBar = ({ handleChange, handleSubmit }) => {
    return (
        <div className="container-searchBar">
            <form type="search">
                <input className="input" placeholder="search" type="search" onChange={handleChange}></input>
                <button className="btn" type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar