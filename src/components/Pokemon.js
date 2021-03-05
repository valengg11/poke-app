import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetPokemon } from '../actions/pokemonAtions'
import _ from 'lodash'

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon
  const dispatch = useDispatch()
  const pokemonState = useSelector(state => state.Pokemon)
  React.useEffect(() => {
    dispatch(GetPokemon(pokemonName))
  }, [])

  const ShowData = () => {
    if (pokemonState.data[pokemonName]) {
      const pokeData = pokemonState.data[pokemonName]
      // const urlImage = 'https://github.com/PokeAPI/sprites/tree/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/' + pokeData.id + '.png'

      console.log(pokeData.id)

      return (
        <div className={'pokemon-container'}>
          <div className={'pokemonImage'}>
            {/* <img src= /> */}
          </div>
          <div>
            <h2>Height</h2>
            {pokeData.height}
            <h2>Weight</h2>
            {pokeData.weight}
            <h2>Attack</h2>
            {pokeData.attack}
          </div>
        </div>
      )
    }
    if (pokemonState.loading) {
      return <p>Loading</p>
    }
    if (pokemonState.errorMsg !== '') {
      return <p>pokemonState.errorMsg</p>
    }
    return <p>error getting pokemon</p>
  }

  return (
    <div>
      <h1>{pokemonName}</h1>
      {ShowData()}
    </div>
  )
}

export default Pokemon