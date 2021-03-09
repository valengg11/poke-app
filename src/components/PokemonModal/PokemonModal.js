import { Modal, Button } from 'react-bootstrap'
import { pokemonImage } from '../../Data'

const PokemonModal = ({ showSelected, selectedPokemons, notSelectedPokemons, SelectedPokemons }) => {

    const urlPokemonImage = (pokemon) => {
        return `${pokemonImage}${pokemon.url.split('/')[6]}.png`
    } 

    return (
        <div>
            <Modal.Dialog show={showSelected} onHide={notSelectedPokemons}>
                <Modal.Header closeButton>
                    <Modal.Title>

                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Compare to</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )

}