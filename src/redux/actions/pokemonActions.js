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

export const pokemonSelection = (pokemon, pokeInfoUrl, pokeDescriptionUrl ) => (dispatch) => {
  Promise.all([
    fetch(pokeInfoUrl).then(information => information.json()),
    fetch(pokeDescriptionUrl).then(description => description.json())
  ]).then(([information, description]) => {
    if (description.gender_rate >= 0 && description.gender_rate <=4) {
      description.gender_rate = 'male'
    } else if (description.gender_rate === -1) {
      description.gender_rate = 'genderless'
    } else {
      description.gender_rate = 'female'
    }
    dispatch({
      type: POKEMON_SELECTION,
      payload: {
        pokemon: pokemon,
        information: information,
        description: description,
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

export const selectedPokemons = (pokemon) => (dispatch) => {
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

export const pokemonCount = (chargedPokemons) => (dispatch) => {
  dispatch({
    type: POKEMON_COUNT,
    payload: {
      chargedPokemons: chargedPokemons + 20
    }
  })
}




