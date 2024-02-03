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
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        specialAttack: "",
        specialDefense: "",
        height: "",
        weight: "",
    });

    const [selectTypes, setSelectTypes] = useState([]);

    const handleChange = (e) => {
        if (e.target.name === "types") {
            const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
            setSelectTypes(prevTypes => [...prevTypes, ...selectedOptions])
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = {
                ...input,
                types: selectTypes,
            };
            
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

            <div className="link-Create">
                <NavLink to="/Home" className="navlinkCreate">BACK</NavLink>
                <h1 className="H">CREATE POKEMON</h1>
            </div>

            <form onSubmit={handleSubmit} className="formCreate">
                <div className="casillas">
                    <label >Name:</label>
                    <input placeholder="Name" onChange={handleChange} name="name" value={input.value} ></input>
                </div>

                <div className="casillas">
                    <label htmlFor="formFile">Imagen:</label>
                    <input name="imagen" type="file" id="formFile" value={input.value} onChange={handleChange} ></input>
                </div>

                <div className="casillas">
                    <label>Hp:</label>
                    <input placeholder="Hp" onChange={handleChange} name="hp" value={input.value}></input>
                </div>

                <div className="casillas">
                    <label>Attack:</label>
                    <input placeholder="Attack" onChange={handleChange} name="attack" value={input.value}></input>
                </div>

                <div className="casillas">
                    <label>Defense:</label>
                    <input placeholder="Defense" onChange={handleChange} name="defense" value={input.value}></input>
                </div>

                <div className="casillas">
                    <label>Special-Attack:</label>
                    <input placeholder="Attack" onChange={handleChange} name="specialAttack" value={input.value}></input>
                </div>

                <div className="casillas">
                    <label>Special-Defense:</label>
                    <input placeholder="Defense" onChange={handleChange} name="specialDefense" value={input.value}></input>
                </div>

                <div className="casillas">
                    <label>Speed:</label>
                    <input placeholder="Speed" onChange={handleChange} name="speed" value={input.value}></input>
                </div>

                <div className="casillas">
                    <label>Height:</label>
                    <input placeholder="Height" onChange={handleChange} name="height" value={input.value}></input>
                </div>

                <div className="casillas">
                    <label>Weight:</label>
                    <input placeholder="Name" onChange={handleChange} name="weight" value={input.value}></input>
                </div>

                <div className="casillas">
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

                <button  type="button" onClick={handleReset} className="clearTypes">Clear Types</button>
                <button  type="submit">Submit</button>
                
            </form>
        </div>
    )
}

export default Create
