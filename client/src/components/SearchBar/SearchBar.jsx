
const SearchBar = ({ handleChange, handleSubmit }) => {
    return (
        <form type="search">
            <input placeholder="search" type="search" onChange={handleChange}></input>
            <button type="submit" onClick={handleSubmit}>Search</button>
        </form>
    )
}

export default SearchBar