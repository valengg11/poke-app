import { Modal, Button, Row, Col, Image, Container } from 'react-bootstrap'
import { pokemonImage } from '../../Data'
import { connect } from 'react-redux'
import { notSelectedPokemons, pokemonSelection } from '../../redux/actions/pokemonActions'
import style from './PokemonModal.module.css'

const PokemonModal = ({ showPokemonInfo, pokemonSelection, notSelectedPokemons, selectedPokemons }) => {
  const handleClose = () => notSelectedPokemons()

  const urlPokemonImage = (pokemon) => {
    return `${pokemonImage}${pokemon.url.split('/')[6]}.png`
  }

  return (
    <div>
      <Modal className={style.modal} show={showPokemonInfo} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {pokemonSelection.map((pokemon) => {
              return (
                <div key={pokemon.name + Math.random()}>
                  {pokemon.name.toUpperCase()}
                </div>
              )
            })}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {pokemonSelection.map((pokemon) => {
            if (showPokemonInfo) {
              return (
                <div >
                  <Container>
                    <Row>
                      <Col>
                        <Image className={style.image} src={urlPokemonImage(pokemon)} />
                      </Col>
                    </Row>
                  </Container>
                  <Container className={style.description}>
                    <Row>
                      <Col>
                        <h1>Description</h1>
                        {pokemon.flavor_text_entries[1].flavor_text}
                      </Col>
                    </Row>
                  </Container>
                  <Container className={style.characteristics}>
                    <Row>
                      <Col>
                        <h1>Characteristics</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h2>Height</h2> <p> {pokemonSelection[0].height}m </p>
                      </Col>
                      <Col>
                        <h2>Weight</h2><p> {pokemonSelection[0].weight}kg </p>
                      </Col>
                      <Col>
                        <h2>Gender</h2><p> {pokemonSelection[0].gender_rate} </p>
                      </Col>
                    </Row>
                  </Container>
                  <Container className={style.type}>
                    <Row>
                      <Col>
                        <h1>Type</h1>
                        <ul>
                          {pokemon.types.map((pokemonTypes) => (
                            <li key={pokemonTypes + Math.random}>
                              {pokemonTypes.type.name}
                            </li>
                          ))}
                        </ul>
                      </Col>
                    </Row>
                  </Container>
                  <Container className={style.stats}>
                    <Row>
                      <Col>
                        <h1>Stats</h1>
                        <ul>
                          {pokemon.stats.map((pokemonStats) => (
                            <li key={pokemonStats + Math.random}>
                              {pokemonStats.stat.name}<br/>
                              {pokemonStats.base_stat}
                            </li>
                          ))}
                        </ul>
                      </Col>
                    </Row>
                  </Container>

                </div>
              )
            }
          })}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">Compare to</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    showPokemonInfo: state.pokemons.showPokemonInfo,
    pokemonSelection: state.pokemons.pokemonSelection,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    notSelectedPokemons: () => dispatch(notSelectedPokemons())

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonModal)