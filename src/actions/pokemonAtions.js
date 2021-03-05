import axios from 'axios'

export const GetPokemonList = (page) => async dispatch => {
  try {
    dispatch({
      type: 'POKEMON_LIST_LOADING'
    })
    const perPage = 20
    const offset = (page * perPage) - perPage
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=' + { perPage } + '&offset=' + { offset }
    const res = await axios.get(url)
    dispatch({
      type: 'POKEMON_LIST_SUCCESS',
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: 'POKEMON_LIST_FAIL',
    })
  }
}

export const GetPokemon = (pokemon) => async dispatch => {
  try {
    dispatch({
      type: 'POKEMON_MULTIPLE_LOADING'
    })
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon 
    const res = await axios.get(url)
    dispatch({
      type: 'POKEMON_MULTIPLE_SUCCESS',
      payload: res.data,
      pokemonName: pokemon
    })
  } catch (e) {
    dispatch({
      type: 'POKEMON_MULTIPLE_FAIL',
    })
  }
}