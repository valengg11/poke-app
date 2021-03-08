import {
    FETCH_POKEMONS_REQUEST,
    FETCH_POKEMONS_SUCCESS,
    FETCH_POKEMONS_ERROR,

} from '../actions/pokemonActions'


const initialState = {
    cardList: [],
    isFetching: false,
    error: null,
}

function pokemons(state = initialState, action) {
    switch (action.type) {
      case FETCH_POKEMONS_REQUEST:
        return {
          ...state,
          isFetching: true
        }
  
      case FETCH_POKEMONS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          pokemonsList: [
            ...state.pokemonsList,
            ...action.payload.pokemons.results
          ],
        }
  
      case FETCH_POKEMONS_ERROR:
        return {
          ...state,
          isFetching: false,
          error: action.payload.error
        }

        default:
            return state
        }
      }
      
      export default pokemons