import React from 'react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import PokemonList from './components/PokemonList'
import Home from './components/Home'
import store from './redux/store'
import {Provider} from 'react-redux'
import Navigation from './components/Navigation'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Navigation/>
        <Route path={'/'} exact component={Home} />
        <Route path={'/pokemon'} exact component={PokemonList} />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
