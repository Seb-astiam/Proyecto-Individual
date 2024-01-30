import { NavLink } from "react-router-dom";
import axios from "axios";

import useTypes from "../../Hooks/useTypes";

import "./Create.css";
import { useState } from "react";

const Create = () => {

    const types = useTypes();

    const [input, setInput] = useState({
        imagen: "",
        name: "",
        vida: "",
        ataque: "",
        defensa: "",
        velocidad: "",
        altura: "",
        peso: ""
    });

    const [selectTypes, setSelectTypes] = useState([]);

    const handleChange = (e) => {
        if (e.target.name === "types") {
            const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
            setSelectTypes(prevTypes => [...prevTypes, ...selectedOptions]);
        }

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = {
                ...input
            }
            const responseBack = await axios.post("http://localhost:3001/pokemons", dataToSend, {
                headers: {
                    'Content-Type': 'application/json', 
                },
            });

            if (responseBack.status === 200) {
                console.log('Datos enviados con éxito', dataToSend);
              } else {
                console.error('Error al enviar datos al servidor', responseBack.data);
              }
        }
        catch (error) {
            console.error('Error de red', error);
        }
    }

    const handleReset = () => {
        setSelectTypes([]);
      };




    return (
        <div className="container-form">
            <NavLink to="/Home">Back</NavLink>
            Estas en el Create

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="formFile">Imagen:</label>
                    <input name="imagen" type="file" id="formFile" value={input.value} onChange={handleChange} ></input>
                </div>

                <div>
                    <label >Name:</label>
                    <input placeholder="Name" onChange={handleChange} name="name" value={input.value} ></input>
                </div>


                <div>
                    <label>Vida:</label>
                    <input placeholder="Name" onChange={handleChange} name="name" value={input.value}></input>
                </div>

                <div>
                    <label>Ataque:</label>
                    <input placeholder="Name" onChange={handleChange} name="name" value={input.value}></input>
                </div>

                <div>
                    <label>Defensa:</label>
                    <input placeholder="Name" onChange={handleChange} name="name" value={input.value}></input>
                </div>

                <div>
                    <label>Velocidad:</label>
                    <input placeholder="Name" onChange={handleChange} name="name" value={input.value}></input>
                </div>

                <div>
                    <label>Altura:</label>
                    <input placeholder="Name" onChange={handleChange} name="name" value={input.value}></input>
                </div>

                <div>
                    <label>Peso:</label>
                    <input placeholder="Name" onChange={handleChange} name="name" value={input.value}></input>
                </div>

                <div>
                    <label>Types:</label>
                    <select
                        name="types"
                        multiple
                        value={selectTypes || []} 
                        onChange={handleChange}
                    >
                        <option value="">Choose types</option>
                            {types.map((type) => (
                                <option key={type.id} value={type.id}>
                                {type.name}
                        </option>
                        ))}
                    </select>
                </div>

                {selectTypes.length > 0 && (
                <div>
                    <p>Selected Types:</p>
                    <ul>
                    {selectTypes.map((typeId) => (
                        <li key={typeId}>{types.find(type => type.id === typeId)?.name}</li>
                    ))}
                    </ul>
                </div>
                )}

                <button  type="button" onClick={handleReset}>Clear Types</button>
                <button  type="submit">Submit</button>
                
            </form>
        </div>
    )
}

export default Create
