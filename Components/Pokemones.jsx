import React from 'react';
import ReactDOM from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAccion,siguientePokemonesAccion,retrocederPokemonesAccion } from '../redux/actions';

export default function Pokemones () {
    const dispatch=useDispatch();
    const Pokemones= useSelector(store=>store.pokemones.array);
    console.log("hola",Pokemones);
  
      return (
            <div>
                  Lista de Pokemones 
                  <button onClick={()=>dispatch(obtenerPokemonesAccion())}>Obtener Pokemones</button>
                  <button onClick={()=>dispatch(siguientePokemonesAccion())}>Siguientes Pokemones</button>
                  <button onClick={()=>dispatch(retrocederPokemonesAccion())}>retroceder Pokemones</button>
                  
                  <ul>
                    {
                        Pokemones.map(i=>(
                            <li key={i.name}>{i.name}</li>
                        ))

                    }
                  </ul>
            </div>
      )
}
