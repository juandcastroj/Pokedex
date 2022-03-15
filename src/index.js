import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import PokedexApp from './PokedexApp';
import  'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <Provider store={store} >
    <PokedexApp/>
  </Provider>,
  document.getElementById('root')
);


