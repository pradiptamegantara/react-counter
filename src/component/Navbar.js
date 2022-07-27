import { Component } from "react";
import { Container, Nav, Navbar as NavbarBS, NavDropdown} from "react-bootstrap";

class Navbar extends Component{
    render() {
        return(
            <NavbarBS bg='dark' variant='dark' expand='lg'>
                <Container>
                    <NavbarBS.Brand href='#home'>React-Bootstrap</NavbarBS.Brand>
                    <NavbarBS.Toggle aria-controls="basic-navbar-control"/>
                    <NavbarBS.Collapse id="basic-navbar-control">
                        <Nav className="me-auto">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Link</Nav.Link>
                            <NavDropdown title='Dropdown'>
                                <NavDropdown.Item>action 1</NavDropdown.Item>
                                <NavDropdown.Item>action 2</NavDropdown.Item>
                                <NavDropdown.Item>action 3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </NavbarBS.Collapse>
                </Container>
            </NavbarBS>
        )
    }
}

export default Navbar;