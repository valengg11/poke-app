import { Modal, Button, Row, Col, Image } from 'react-bootstrap'
import { pokemonImage } from '../../Data'
import { connect } from 'react-redux'
import { notSelectedPokemons, pokemonSelection } from '../../redux/actions/pokemonActions'

const PokemonModal = ({ showPokemonInfo, pokemonSelection, notSelectedPokemons, selectedPokemons }) => {
  const handleClose = () => notSelectedPokemons()
  
  const urlPokemonImage = (pokemon) => {
    return `${pokemonImage}${pokemon.url.split('/')[6]}.png`
  }

  return (
    <div>
      <Modal show={showPokemonInfo} onHide={handleClose}>
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
          {/* {pokemonSelection.map((pokemon) => {
                        if (showPokemonInfo) {
                            return (
                                <div>
                                    <Row>
                                        <Col>
                                            <Image variant="top" src={pokemonImage(pokemon)} fluid={'true'}/>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        }
                    })} */}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
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