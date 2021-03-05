import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetPokemon } from '../actions/pokemonAtions'
import _ from 'lodash'
import '.././App.css'
import { Container, Row, Col } from 'react-bootstrap/'

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

      return (
        <div className={'pokemon-container'}>
          <Container>
            <Row>
              <Col className={'pokemonName'}>
                <h1>{pokemonName}</h1>
              </Col>
            </Row>
            <Row>
              <Col sm={6} >
                <div className={'pokemonImage'}>

                  Here is the image
                  {/* <img src= /> */}
                </div>
              </Col>
              <Col xs={6} sm={3} >
                <div className={'heightweight'}>
                  <h2>Height</h2>
                  {pokeData.height}
                </div>
                <div className={'heightweight'}>
                  <h2>Weight</h2>
                  {pokeData.weight}
                </div>
              </Col>
              <Col xs={6} sm={3} >
                <h2>Stats</h2>
                {pokeData.stats.map(e1 => {
                  return <p>{e1.stat.name} {e1.base_stat}</p>
                })}
              </Col>
            </Row>
          </Container>
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
      {ShowData()}
    </div>
  )
}

export default Pokemon