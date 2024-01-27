import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes } from "../Redux/typeSlice";

const useTypes = () => {
    const types = useSelector((state) => state.type.types)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseBack = await axios.get("http://localhost:3001/type");
                dispatch(getAllTypes(responseBack.data));
            }
            catch (error) {
                console.error("error al pedir los types de mi backend", error);
            }
        }

        fetchData();
    }, [])

    return types;
}

export default useTypes;