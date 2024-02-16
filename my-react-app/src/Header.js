import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Tu nombre de super héroe</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;