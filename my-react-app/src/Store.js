import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

function Store({ heroList }) {

    const [buyingHistory, setBuyingHistory] = useState({});
    const [prices, setPrices] = useState({});

    useEffect(() => {
        const newPrices = {};
        heroList.forEach(hero => {
            newPrices[hero.id] = Math.floor(Math.random() * 10) + 1;
        });
        setPrices(newPrices);
    }, []);

    // Modal logic
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <h2 className="text-center my-3">Tienda</h2>
            <Row className="justify-content-center">
                {heroList.map((hero, index) => {
                    if (hero.description && !hero.thumbnail.path.endsWith('image_not_available')) {
                        return (
                            <Card className="p-3 m-2 col-2 d-flex flex-column justify-content-between" >
                                <Card.Img variant="top" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
                                <Card.Body>
                                    <Card.Title>{hero.name}</Card.Title>
                                    <Card.Text style={{ fontSize: '14px' }}>
                                        {hero.description}
                                    </Card.Text>
                                </Card.Body>
                                <Button
                                    variant={buyingHistory[hero.id] ? "secondary" : "primary"}
                                    onClick={() => {
                                        const newBuyingHistory = { ...buyingHistory };
                                        newBuyingHistory[hero.id] = true;
                                        setBuyingHistory(newBuyingHistory);
                                        handleShow();
                                    }}
                                    disabled={buyingHistory[hero.id] ? true : false}
                                >
                                    {buyingHistory[hero.id] ? "Agotado" : `Comprar $${prices[hero.id] || ''}`}</Button>
                            </Card>
                        );
                    }

                })}
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>¡Compra exitosa!</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>¡Gracias por tu compra!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>

    );
}

export default Store;