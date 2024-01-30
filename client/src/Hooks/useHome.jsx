import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getAllPokemons } from "../Redux/pokeSlice";

import axios from "axios";


const useHome = () => {
    const pokemons = useSelector((state) => state.pokemon.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {  
        const fetchData = async () => {
            try {
                const responseBack = await axios.get("http://localhost:3001/pokemons");
                dispatch(getAllPokemons(responseBack.data));
            } 
            catch (error) {
              console.error("Algo falló en la petición a mi Backend", error);
            }
          };
        
          fetchData();
    }, [dispatch])

    return pokemons
}

export default useHome;