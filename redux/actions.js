import axios from "axios"
import { OBTENER_POKEMONES_EXITO, SIGUIENTE_POKEMONES_EXITO, RETROCEDER_POKEMONES_EXITO } from "./actionsTypes";

export const obtenerPokemonesAccion=()=>async(dispatch,getState)=>{
    try{
        const offset=getState().pokemones.offset; // este es state del reducir
        //const {offset}=getState().pokemones; // lo mismo con destructuring
        const res= await axios.get( `https://pokeapi.co/api/v2/ability/?limit=20&offset=${offset}`);
     
        const basedata=res.data.results;
        console.log("labase de datos es:",basedata);
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: basedata
        })
    }catch{
        console.log("Error al accder a la base de datos API");
    }

}

export const siguientePokemonesAccion=()=> async(dispatch,getState)=>{
    try{   
        
        const offset=getState().pokemones.offset; // este es state del reducir
        //const {offset}=getState().pokemones; // lo mismo con destructuring
        const siguiente= offset+20;
       
        const res= await axios.get( `https://pokeapi.co/api/v2/ability/?limit=20&offset=${siguiente}`);
        const basedata=res.data.results;
        console.log("siguiente base dtae",basedata);
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: basedata,
            offset: siguiente
        })
    }
    catch{
        console.log("error al cargar los siguienres pokemones");
    }
}

export const retrocederPokemonesAccion=()=> async(dispatch,getState)=>{
    try{   
        
        const offset=getState().pokemones.offset; // este es state del reducir
        //const {offset}=getState().pokemones; // lo mismo con destructuring
        const retroceder= offset-20;
        if(retroceder<20) {
            return
        }

       
        const res= await axios.get( `https://pokeapi.co/api/v2/ability/?limit=20&offset=${retroceder}`);
        const basedata=res.data.results;
        console.log("retroceder base dtae",basedata);
        dispatch({
            type: RETROCEDER_POKEMONES_EXITO,
            payload: basedata,
            offset: retroceder
        })
    }
    catch{
        console.log("error al cargar los siguienres pokemones");
    }
}