import React from 'react';
import ReactDOM from 'react-dom/client';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAccion,siguientePokemonesAccion,retrocederPokemonesAccion } from '../redux/actions';

export default function Pokemones () {
    const dispatch=useDispatch();
    const Pokemones= useSelector(store=>store.pokemones.results);
    
   
    const next= useSelector(store=> store.pokemones.next);
    const previous= useSelector(store=> store.pokemones.previous);
 
  
      return (
            <div>
                  Lista de Pokemones 
                  {
                    Pokemones.length===0 && // operador condicional con &&
                    <button onClick={()=>dispatch(obtenerPokemonesAccion())}>Obtener Pokemones</button>
                    
                  }

                  {
                    next &&
                    <button onClick={()=>dispatch(siguientePokemonesAccion())}>Siguientes Pokemones</button>
                  }
                  
                  {
                    previous &&
                    <button onClick={()=>dispatch(retrocederPokemonesAccion())}>retroceder Pokemones</button>
                  }
                  
                  
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
