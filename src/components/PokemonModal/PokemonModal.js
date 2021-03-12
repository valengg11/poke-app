import React from 'react'
import { connect } from 'react-redux'
import { notSelectedPokemons, selectedPokemons } from '../../redux/actions/pokemonActions'
import PokemonModalAlone from './PokemonModalAlone'
import PokemonModalVS from './PokemonModalVS'

function PokemonModal({ showPokemonInfo, notSelectedPokemons, pokemonSelection, selectedPokemons }) {
    // const keepPokemon = () => {
    //     selectedPokemons()
    // }

    return (
        <>
            if (pokemonSelection.length === 2) {
                <PokemonModalVS
                    pokemonSelection={pokemonSelection}
                    showPokemonInfo={showPokemonInfo}
                />


            }
        else {
                <PokemonModalAlone
                    pokemonSelection={pokemonSelection}
                    showPokemonInfo={showPokemonInfo}
                    selectedPokemons={selectedPokemons}
                />
            }
        </>
    )


}

const mapStateToProps = (state) => {
    return {
        showPokemonInfo: state.pokemons.showPokemonInfo,
        pokemonSelectionL: state.pokemons.pokemonSelection
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        notSelectedPokemons: () => dispatch(notSelectedPokemons()),
        selectedPokemons: () => dispatch(selectedPokemons())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonModal)