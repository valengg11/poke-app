import React from 'react'
import { connect } from 'react-redux'
import { pokemonImage } from '../../Data'
import { Card, Container, Row, Col } from 'react-bootstrap'
import style from './PokemonCard.module.css'

const PokemonCard = ({ pokemonName, url }) => {
  const urlPokemonImage = `${pokemonImage}${url.split('/')[6]}.png`

  return (
    <div className={style.cardContainer}>
      {/* <Container>
        <Row>
          <Col xs={6} sm={12} md={6}> */}
            <Card className={style.card}>
              <Card.Img className={style.image} variant="top" src={urlPokemonImage} />
              <Card.Body className={style.body}>
                <Card.Title>{pokemonName.toUpperCase()}</Card.Title>
              </Card.Body>
            </Card>
          {/* </Col>
        </Row>
      </Container> */}

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
)(PokemonCard)