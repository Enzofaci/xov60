import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/Logo.png'

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home"><img src={logo} className='logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"><b>Programação</b></Nav.Link>
                <Nav.Link href="#link"><b>Promoções</b></Nav.Link>
                <Nav.Link href="#link"><b>Jornal da Xov</b></Nav.Link>
                <NavDropdown title="Notícias" className='fw-bold'  id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Entretenimento</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Esportes</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Sobre nós</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Contato</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default Header