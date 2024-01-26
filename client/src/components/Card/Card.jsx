const Card = ({ pokemon }) => {
    const { id, imagen, name, types } = pokemon;

    const typeNames = types.map(type => type.type.name);
    
    

    return ( 
        <tr>
            <td>{id}</td>
            <td><strong>{name}</strong></td>
            <td>
                <img src={imagen} alt="Imagen" />
                <p> {typeNames.join("  ")} </p>
            </td>
        </tr>
    )
}

export default Card