import axios from "axios"
import { OBTENER_POKEMONES_EXITO, SIGUIENTE_POKEMONES_EXITO, RETROCEDER_POKEMONES_EXITO } from "./actionsTypes";

export const obtenerPokemonesAccion=()=>async(dispatch,getState)=>{
    try{
      
       // const offset=getState().pokemones.offset; // este es state del reducir, para obtener el valor del reduce con nombre offser,el cual se quito porque se mejoro la API colocando los elementos puros que trae la API externa, count, next y previos.
        //const {offset}=getState().pokemones; // lo mismo con destructuring
        const res= await axios.get( `https://pokeapi.co/api/v2/ability/?limit=20&offset=0`);
        console.log("labase de datos es:",res.data);
        const basedata=res.data;
        
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
        
      //  const offset=getState().pokemones.offset; // este es state del reducir
        //const {offset}=getState().pokemones; // lo mismo con destructuring
        //const siguiente= offset+20;
       const next = getState().pokemones.next; //pokemones es el nombre que le pusimos al reducer en el Store 
       console.log("variable next",next);
        const res= await axios.get(next);
        const basedata=res.data;
        console.log("siguiente base dtae",basedata);
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: basedata,

        })
    }
    catch{
        console.log("error al cargar los siguienres pokemones");
    }
}

export const retrocederPokemonesAccion=()=> async(dispatch,getState)=>{
    try{   
        
       // const offset=getState().pokemones.offset; // este es state del reducir
        //const {offset}=getState().pokemones; // lo mismo con destructuring
      //  const retroceder= offset-20;
     //   if(retroceder<20) {
          //  return
       /// }
        const previous= getState().pokemones.previous;
     
        const res= await axios.get( previous);
        const basedata=res.data;
        
        dispatch({
            type: RETROCEDER_POKEMONES_EXITO,
            payload: basedata
        })
    }
    catch{
        console.log("error al cargar los siguientes pokemones");
    }
}

