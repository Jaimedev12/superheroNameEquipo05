import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from "react";
import PowGif from './super.gif'

function QuizForm() {

    const [name, setName] = useState('');
    const [month, setMonth] = useState(0);
    const [superHeroName, setSuperHeroName] = useState('');

    const names1 = ["Captain", "Wonder", "Super", "Phantom", "Dark", "Incredible", "Professsor", "Iron", "Hawk", "Archer", "Steel", "Bolt", "Atomic", "Torch", "Space", "Mega", "Turbo", "Fantastic", "Invisible", "Night", "Silver", "Aqua", "Amazing", "Giant", "Rock", "Power"];
    const names2 = ["Shield", "Arrow" , "Justice" , "Thunder" , "Rider" , "Falcon" , "Ninja" , "Spider" , "Beast" , "Blade" , "Hulk", "Doom"]; 

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const firstLetter = name.toUpperCase()[0];
        const letterIndex = firstLetter.charCodeAt(0) - 'A'.charCodeAt(0);
        console.log(names1[letterIndex]);
        console.log(names2[month-1]);

        const superHeroName = `${names1[letterIndex]} ${names2[month-1]}`;
        setSuperHeroName(superHeroName);
    }

    return (
        <div className="quiz-form-container"> 
            <Form className="m-5" onSubmit={handleSubmit}>
                <Row>
                    <Col lg={6}>
                        <h3 className='mb-3 action-comic'>Nombre</h3>
                        <Form.Group className="mb-3" controlId="formName" onChange={(e) => {setName(e.target.value)}}>
                            <Form.Control type="text" placeholder="Ingresa tu nombre" required/>
                        </Form.Group>
                    </Col>
                    
                    <Col lg={6}>
                        <h3 className='mb-3 action-comic'>Mes de nacimiento</h3>
                        <Form.Select aria-label="Default select example" required onChange={(e) => {setMonth(e.target.value)}}>
                            <option value="">Elije tu mes de nacimiento</option>
                            <option value={1}>Enero</option>
                            <option value={2}>Febrero</option>
                            <option value={3}>Marzo</option>
                            <option value={4}>Abril</option>
                            <option value={5}>Mayo</option>
                            <option value={6}>Junio</option>
                            <option value={7}>Julio</option>
                            <option value={8}>Agosto</option>
                            <option value={9}>Septiembre</option>
                            <option value={10}>Octubre</option>
                            <option value={11}>Noviembre</option>
                            <option value={12}>Diciembre</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                {superHeroName && (
                    <div className="mt-3">
                        <h3 className="action-comic">Tu nombre de super héroe es:</h3>
                        <h1 className="action-comic">{superHeroName}</h1>
                        <img src={PowGif} className='gif'/>
                    </div>
                )}
            </Form>
        </div>
    );
}

export default QuizForm;