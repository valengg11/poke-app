// import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// import { fetchData } from '../../redux/actions/pokemonActions'
import PokemonCard from '../PokemonCard/PokemonCard'
import {CardDeck} from 'react-bootstrap'
// import ReactPaginate from 'react-paginate'

const PokemonList = (fetchData, cardList) => {

    return (
        <div >
            <CardDeck >
                {cardList.map((pokemon) => {
                    return (
                        <div key={pokemon.name} onClick={() => {

                        }}>
                            <PokemonCard/>
                        </div>
                    )
                })}
            </CardDeck>
        </div>
    )
}    

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonList)
