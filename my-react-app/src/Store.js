import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';

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

    return (
        <Container>
            <h2 className="text-center">Store</h2>
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
                                    }}
                                    disabled={buyingHistory[hero.id] ? true : false}
                                >
                                    {buyingHistory[hero.id] ? "Agotado" : `Comprar $${prices[hero.id] || ''}`}</Button>
                            </Card>
                        );
                    }

                })}
            </Row>
        </Container>

    );
}

export default Store;