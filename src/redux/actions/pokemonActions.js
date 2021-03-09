import {pokemonData} from '../../Data'

export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST'
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS'
export const FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR'
export const POKEMON_SELECTION = 'POKEMON_SELECTION'
export const NOT_SELECTED_POKEMON = 'NOT_SELECTED_POKEMON'
export const POKEMON_SELECTION_ERROR = 'POKEMON_SELECTION_ERROR'
export const SELECTED_POKEMONS = 'SELECTED_POKEMONS'
export const POKEMON_COUNT = 'POKEMON_COUNT'


export const fetchData = (counter) => (dispatch) => {
  const url = `${pokemonData}pokemon?offset=${counter}&limit=20`
  dispatch({type: FETCH_POKEMONS_REQUEST})
  fetch(url)
    .then(res => res.json())
    .then(queryData =>{
      setTimeout(() => {
        dispatch({
          type: FETCH_POKEMONS_SUCCESS,
          payload: {
            pokemons: queryData
          }
        })
      }, 500)
    })
    .catch(error => {
      dispatch({
        type: FETCH_POKEMONS_ERROR,
        payload: {
          error: error.toString()
        }
      })
    })
}

export const pokemonSelection = (pokemon, pokemonUrl, pokemonDescriptionUrl ) => (dispatch) => {
  Promise.all([
    fetch(pokemonUrl).then(pokeInfo => pokeInfo.json()),
    fetch(pokemonDescriptionUrl).then(pokeDes => pokeDes.json())
  ]).then(([pokeInfo, pokeDes]) => {
    if (pokeDes.gender_rate >= 4) {
      pokeDes.gender_rate = 'female'
    } else if (pokeDes.gender_rate === -1) {
      pokeDes.gender_rate = 'genderless'
    } else {
      pokeDes.gender_rate = 'male'
    }
    dispatch({
      type: POKEMON_SELECTION,
      payload: {
        pokemon: pokemon,
        pokemonInfo: pokeInfo,
        pokemonDescription: pokeDes,
      }
    })
  })
    .catch(error => {
      dispatch({
        type: POKEMON_SELECTION_ERROR,
        payload: {
          error: error.toString()
        }
      })
    })
}

export const SelectedPokemons = (pokemon) => (dispatch) => {
  dispatch({
    type: SELECTED_POKEMONS,
    payload: {
      pokemon
    }
  })
}

export const notSelectedPokemons = () => (dispatch) => {
  dispatch({
    type: NOT_SELECTED_POKEMON,
    payload: {
      pokemons: []
    }
  })
}

export const countPokemon = (scrollCounter) => (dispatch) => {
  dispatch({
    type: POKEMON_COUNT,
    payload: {
      scrollCounter: scrollCounter + 20
    }
  })
}




