import { OBTENER_POKEMONES_EXITO, SIGUIENTE_POKEMONES_EXITO, RETROCEDER_POKEMONES_EXITO } from "./actionsTypes"

const datainitial={
    count: null,
    next: null,
    previous:null,
    results:[]

}

export default function pokereducer(state=datainitial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            console.log("ingresando reducer obtener");
            return{
                ...state,
                ...action.payload
            }
        case SIGUIENTE_POKEMONES_EXITO:
            console.log("ingresando reducer siguiente");
            return{
                ...state,
                ...action.payload,
                
            }
        case RETROCEDER_POKEMONES_EXITO:
            console.log("ingresando reducer retroceder");
            return{
                ...state,
                ...action.payload,
            }


        default:
            return state;


    }


}


/// async cuando es asincrona y vamos a dolver un objeto como promesa

