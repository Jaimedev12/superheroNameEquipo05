import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SuperHeroes from './SuperHeroes';
import Store from './Store';
import HeroName from './HeroName';


function Navigationbar() {
  return (
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">MARVEL</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/superheroes">Súper Heroes</Nav.Link>
              <Nav.Link as={Link} to="/store">Store</Nav.Link>
              <Nav.Link as={Link} to="/namecalc">Nombre de Héroe</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/superheroes" element={<SuperHeroes />} />
        <Route path="/store" element={<Store />} />
        <Route path="/namecalc" element={<HeroName />} />
      </Routes>
    </Router>
  );
}

export default Navigationbar;