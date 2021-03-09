import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../redux/actions/pokemonActions'
import PokemonCard from '../PokemonCard/PokemonCard'
import {CardDeck} from 'react-bootstrap'

const PokemonList = ({fetchData, cardList}) => {

    useEffect(() => {
        fetchData()
    },[fetchData])

    return (
        <div >
            <CardDeck >
                {cardList.map((pokemon) => {
                    return (
                        <div key={pokemon.name}>
                            <PokemonCard
                                pokemonName = {pokemon.name}
                                url = {pokemon.url}
                            />
                        </div>
                    )
                })}
            </CardDeck>
        </div>
    )
}    

const mapStateToProps = (state) => {
    return {
        cardList: state.pokemons.cardList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchData(url)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonList)
