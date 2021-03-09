import { Navbar, Form, FormControl, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'

const Navigation = () => {

    return (
        <nav>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">PokeApp</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/pokemon">Pokemons</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                </Form>
            </Navbar>
        </nav>
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
  )(Navigation)