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
        hp: "50",
        attack: "50",
        defense: "50",
        speed: "50",
        specialAttack: "",
        specialDefense: "",
        height: "0",
        weight: "0",
    });

    const [error, setError] = useState({
        name: "",   
        attack: "",  
    })

    const validate = (name, value) => {

        if(value) {
            name === "name" ? setError((prevent) => ({
                            ...prevent,
                            name: "faltan valores"
                        }))

                        : 

                        null
        }

        else {

        }
        // if(name === "name") {
        //     if(value){
        //         setError((prevent) => ({
        //             ...prevent,
        //             name: "faltan valores"
        //         }))
        //     }

        // }
    }

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

            validate(e.target.name, e.target.value)
        }
    }

    const handleSubmit = async () => {
        try {

            if(!input.name) {
                alert("no vas a hacer submit")
            } else {
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

            <form onSubmit={handleSubmit} className="formCreate" enctype =" multipart/form-data">
            <p>
                Los campos obligatorios van seguidos de
                <strong> <abbr title="required"> * </abbr> </strong>.
            </p>

                <div className="casillas">
                    <label >Name:</label>
                    <input placeholder="Name" onChange={handleChange} name="name" value={input.value} ></input>
                    <label for="name"
                        ><abbr title="required" aria-label="required">*</abbr>
                    </label>
                </div>

                <div className="casillas">
                    <label htmlFor="formFile">Imagen:</label>
                    <input name="imagen" type="file" id="formFile" accept="image/*" value={input.value} onChange={handleChange} ></input>
                    <label for="imagen"
                        ><abbr title="required" aria-label="required">*</abbr>
                    </label>
                </div>

                <div className="casillas">
                    <label>Hp:</label>
                    <input placeholder="Hp" onChange={handleChange} name="hp" value={input.value}
                        type="range"
                        id="hp"
                        min="1"
                        max="100"
                        step="1"
                    ></input>
                    <p>{input.hp}</p>
                    <label for="hp"
                        ><abbr title="required" aria-label="required">*</abbr>
                    </label>
                </div>

                <div className="casillas">
                    <label>Attack:</label>
                    <input placeholder="Attack" onChange={handleChange} name="attack" value={input.value}
                        type="range"
                        id="attack"
                        min="1"
                        max="100"
                        step="1"
                    ></input>
                    <p>{input.attack}</p>
                    <label for="attack"
                        ><abbr title="required" aria-label="required">*</abbr>
                    </label>
                </div>

                <div className="casillas">
                    <label>Defense:</label>
                    <input placeholder="Defense" onChange={handleChange} name="defense" value={input.value}
                        type="range"
                        id="defense"
                        min="1"
                        max="100"
                        step="1"
                    ></input>
                    <p>{input.defense}</p>
                    <label for="defense"
                        ><abbr title="required" aria-label="required">*</abbr>
                    </label>
                </div>

                <div className="casillas">
                    <label>Special-Attack:</label>
                    <input placeholder="Attack" onChange={handleChange} name="specialAttack" value={input.value}
                        type="range"
                        id="specialAttack"
                        min="1"
                        max="150"
                        step="1"
                    ></input>
                    <p>{input.specialAttack}</p>
                </div>

                <div className="casillas">
                    <label>Special-Defense:</label>
                    <input placeholder="Defense" onChange={handleChange} name="specialDefense" value={input.value}
                        type="range"
                        id="specialDefense"
                        min="1"
                        max="150"
                        step="1"
                    ></input>
                    <p>{input.specialDefense}</p>
                </div>

                <div className="casillas">
                    <label>Speed:</label>
                    <input placeholder="Speed" onChange={handleChange} name="speed" value={input.value}
                        type="range"
                        id="speed"
                        min="1"
                        max="100"
                        step="1"
                    ></input>
                    <p>{input.speed}</p>
                </div>

                <div className="casillas">
                    <label>Height:</label>
                    <input placeholder="Height" onChange={handleChange} name="height" value={input.value}></input>
                    <p className="unidadMedida">m</p>
                </div>

                <div className="casillas">
                    <label>Weight:</label>
                    <input placeholder="Weight" onChange={handleChange} name="weight" value={input.value}></input>
                    <p className="unidadMedida">kg</p>
                </div>

                <div className="casillas">
                    <label>Choose types:</label>
                    <select
                        name="types"
                        multiple
                        value={selectTypes || []} 
                        onChange={handleChange}
                    >
                            {types.map((type) => (
                                <option key={type.id} value={type.id}>
                                {type.name}
                        </option>
                        ))}
                    </select>
                </div>

                {selectTypes.length >= 0 && selectTypes.length <= 2 ?  (
                <div>
                    <p>Selected Types:</p>
                    <ul>
                    {selectTypes.map((typeId) => (
                        <li key={typeId}>{types.find(type => type.id === typeId)?.name}</li>
                    ))}
                    </ul>
                </div>
                )
                :

                <div>
                    <button  type="button" onClick={handleReset} className="clearTypes">Maximo son 2 tipos!</button>
                </div>
                }

                <button  type="button" onClick={handleReset} className="clearTypes">Clear Types</button>
                <button  type="submit">Submit</button>
                
            </form>
        </div>
    )
}

export default Create
