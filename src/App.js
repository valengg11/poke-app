import React from 'react'
import './App.css';
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import PokemonList from './components/PokemonList'
import Pokemon from './components/Pokemon'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={'/Home'}>Home</NavLink>
        <NavLink to={'/pokemon'}>See all pokemons</NavLink>   
      </nav>
      <BrowserRouter>
        <Route path={'/'} exact component={Home} />
        <Route path={'/pokemon'} exact component={PokemonList} />
        <Route path={'/pokemon/:pokemon'} exact component={Pokemon} />
        <Redirect to={'/'} />
      </BrowserRouter>
    </div>
  );
}

export default App;
