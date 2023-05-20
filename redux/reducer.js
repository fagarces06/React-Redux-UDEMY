import { OBTENER_POKEMONES_EXITO } from "./actionsTypes"

const datainitial={
    array:[],
}

export default function pokereducer(state=datainitial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return{
                ...state,
                array: action.payload
            }
        default:
            return state;


    }


}


/// async cuando es asincrona y vamos a dolver un objeto como promesa

