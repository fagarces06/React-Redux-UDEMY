import React from 'react';
import ReactDOM from 'react-dom/client';
import Pokemones from '../Components/Pokemones.jsx';
import { Provider } from 'react-redux';
import generateStore from '../redux/store.js';
import { useDispatch, useSelector } from 'react-redux';


export default function App () {
      const store= generateStore();
      return (
            <div>
                  hola react
             <Provider store={store}>
            <Pokemones/>
            </Provider>     
            </div>
      )
}
