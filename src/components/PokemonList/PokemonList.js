import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData, pokemonSelection, selectedPokemons, notSelectedPokemons, pokemonCount } from '../../redux/actions/pokemonActions'
import PokemonCard from '../PokemonCard/PokemonCard'
import { CardDeck } from 'react-bootstrap'
import { pokemonData } from '../../Data'
import PokemonModal from '../PokemonModal'

const PokemonList = ({ fetchData, cardList, chargedPokemons, pokemonSelection, notSelectedPokemons, pokemonCount }) => {
  const pokeDescriptionUrl = (url) => {
    return `${pokemonData}pokemon-species/${url.split('/')[6]}`
  }
  useEffect(() => {
    fetchData(chargedPokemons)
  }, [fetchData, chargedPokemons])

  window.onscroll = (() => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      pokemonCount(chargedPokemons)
    }
  })

  return (
    <div >
      <CardDeck >
        {cardList.map((pokemon) => {
          return (
            <div
              key={pokemon.name + Math.random()}
              onClick={() => {
                pokemonSelection(pokemon, pokemon.url, pokeDescriptionUrl(pokemon.url))
              }}
            >
              <PokemonCard
                pokemonName={pokemon.name}
                url={pokemon.url}
              />
            </div>
          )
        })}
      </CardDeck>
      <div>
        <PokemonModal/>
      </div>
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
    pokemonCount: (chargedPokemons) => dispatch(pokemonCount(chargedPokemons)),
    pokemonSelection: (pokemon, pokeInfoUrl, pokeDescriptionUrl) => dispatch(pokemonSelection(pokemon, pokeInfoUrl, pokeDescriptionUrl))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList)
