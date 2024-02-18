import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import SuperHeroes from './SuperHeroes';
import Store from './Store';
import HeroName from './HeroName';
import CryptoJS from 'crypto-js';


function Navigationbar() {
  const [heroList, setHeroList] = useState([]);

  function createHash(input) {
      return CryptoJS.MD5(input).toString();
  }

  useEffect(() => {
      const publicKey = '9a80d271d6c7a4e0c4534eedaa10cd6e';
      const privateKey = 'f36068157b8b0160dbf4c9b7b4ce170a58edd1ec';
      const ts = new Date().getTime();

      const hash = createHash(ts + privateKey + publicKey);

      fetch(`https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=100&apikey=${publicKey}&hash=${hash}&ts=${ts}`)
          .then(response => response.json())
          .then(data => {setHeroList(data.data.results); console.log(data.data.results);})
          .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">MARVEL</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/superheroes">Superhéroes</Nav.Link>
              <Nav.Link as={Link} to="/store">Tienda</Nav.Link>
              <Nav.Link as={Link} to="/namecalc">Nombre de Héroe</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/superheroes" element={<SuperHeroes heroList={heroList} />} />
        <Route path="/store" element={<Store heroList={heroList} />} />
        <Route path="/namecalc" element={<HeroName/>} />
      </Routes>
    </Router>
  );
}

export default Navigationbar;