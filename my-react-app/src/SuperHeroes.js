import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';

function SuperHeroes( {heroList} ) {

    return (
        <Container>
            <h2>SuperHeroes</h2>
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

export default SuperHeroes;

