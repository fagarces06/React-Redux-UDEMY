import axios from "axios"
import { OBTENER_POKEMONES_EXITO } from "./actionsTypes";

export const obtenerPokemonesAccion=()=>async(dispatch,getState)=>{
    try{
        const res= await axios.get('https://pokeapi.co/api/v2/pokemon/');
        const basedata=res.data.results;
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: basedata
        })
    }catch{

    }

}