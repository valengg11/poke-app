import {
    FETCH_POKEMONS_REQUEST,
    FETCH_POKEMONS_SUCCESS,
    FETCH_POKEMONS_ERROR,
    POKEMON_SELECTION,
    NOT_SELECTED_POKEMON,
    POKEMON_SELECTION_ERROR,
    SELECTED_POKEMONS,
    POKEMON_COUNT,

} from '../actions/pokemonActions'


const initialState = {
    cardList: [],
    isFetching: false,
    error: null,
    pokemonSelection: [],
    showPokemonInfo: false,
    


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
          cardList: [
            ...state.cardList,
            ...action.payload.pokemons.results
          ],
        }
  
      case FETCH_POKEMONS_ERROR:
        return {
          ...state,
          isFetching: false,
          error: action.payload.error
        }

      case POKEMON_SELECTION:
        return {
          ...state,
          showPokemonInfo: true,
          keepSelected: true,
        selectedPokemons: [
          ...state.selectedPokemons,
          {
            ...action.payload.pokemon,
            ...action.payload.pokemonInfo,
            ...action.payload.pokemonDescription,
          }
        ]
      }
    case NOT_SELECTED_POKEMON:
      return {
        ...state,
        showSelected: false,
        keepSelected: false,
        selectedPokemons: []
      }
    case SELECTED_POKEMONS:
      return {
        ...state,
        showSelected: false,
        keepSelected: true,
        selectedPokemons: [
          ...state.selectedPokemons
        ]
      }
    case POKEMON_SELECTION_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }
    case POKEMON_COUNT:
      return {
        ...state,
        isFetching: false,
        scrollCounter: action.payload.scrollCounter
      }

        default:
            return state
        }
      }
      
      export default pokemons