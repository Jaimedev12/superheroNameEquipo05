import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

function Store( {heroList} ) {

    const [buyingHistory, setBuyingHistory] = useState({});

    return (
        <Container>
            <h2>Store</h2>
            <div className="container">
                <div className="row">
                    {heroList.map((hero, index) => {
                        if (hero.description && !hero.thumbnail.path.endsWith('image_not_available')){
                            return (
                                <Card className="p-3 m-2 col-2" >
                                    <Card.Img variant="top" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}/>
                                    <Card.Body>
                                        <Card.Title>{hero.name}</Card.Title>
                                        <Card.Text style={{ fontSize: '14px' }}>
                                            {hero.description}
                                        </Card.Text>
                                        <Button 
                                            variant={buyingHistory[hero.id] ? "secondary" : "primary"}
                                            onClick={() => {
                                                const newBuyingHistory = {...buyingHistory};
                                                newBuyingHistory[hero.id] = true;
                                                setBuyingHistory(newBuyingHistory);
                                            }}
                                            disabled={buyingHistory[hero.id] ? true : false}
                                        >
                                            {buyingHistory[hero.id] ? "Agotado" : "Comprar"}</Button>
                                    </Card.Body>
                                </Card>
                            );
                        }
                        
                    })}
                </div>
            </div>
        </Container>
        
    );
}

export default Store;