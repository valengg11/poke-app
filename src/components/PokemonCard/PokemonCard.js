import React from 'react'
import { connect } from 'react-redux'
import { pokemonImage } from '../../Data'
import {Card} from 'react-bootstrap'

const PokemonCard = ({ pokemonName, url }) => {
  const urlPokemonImage = `${pokemonImage}${url.split('/')[6]}.png`

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={urlPokemonImage} />
        <Card.Body>
          <Card.Title>{pokemonName}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonCard)