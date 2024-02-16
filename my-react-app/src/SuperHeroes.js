import React, { useState, useEffect } from "react";
import CryptoJS from 'crypto-js';
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';

function SuperHeroes() {
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

