import React from 'react'

const DefaultState = {
    loading: false,
    data: [],
    errorMsg: '',
    count: 0,

}

const PokemonListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case 'POKEMON_LIST_LOADING':
            return {
                ...state,
                loading: true,
                errorMsg: ''
            }
        case 'POKEMON_LIST_FAIL':
            return {
                ...state,
                loading: false,
                errorMsg: 'Unable to get pokemon'
            }
        case 'POKEMON_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.results,
                count: action.payload.count,
                errorMsg: ''
            }
        default:
            return state
    }
}

export default PokemonListReducer