import React from 'react';
import ReactDOM from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAccion } from '../redux/actions';
export default function Pokemones () {
    const dispatch=useDispatch();
    const Pokemones= useSelector(store=>store);
    console.log(Pokemones);
  
      return (
            <div>
                  Lista de Pokemones
                  <button onClick={()=>dispatch(obtenerPokemonesAccion())}>Obtener Pokemones</button>
            </div>
      )
}
