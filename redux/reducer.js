import { OBTENER_POKEMONES_EXITO, SIGUIENTE_POKEMONES_EXITO, RETROCEDER_POKEMONES_EXITO } from "./actionsTypes"

const datainitial={
    array:[],
    offset: 20,
}

export default function pokereducer(state=datainitial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            console.log("ingresando reducer obtener");
            return{
                ...state,
                array: action.payload
            }
        case SIGUIENTE_POKEMONES_EXITO:
            console.log("ingresando reducer siguiente");
            return{
                ...state,
                array:action.payload,
                offset:action.offset
            }
        case RETROCEDER_POKEMONES_EXITO:
            console.log("ingresando reducer retroceder");
            return{
                ...state,
                array:action.payload,
                offset:action.offset
            }


        default:
            return state;


    }


}


/// async cuando es asincrona y vamos a dolver un objeto como promesa

