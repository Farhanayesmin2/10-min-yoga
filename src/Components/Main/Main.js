import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Main = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
        .then(data => setCards(data))
    },[])
console.log(cards);

    return (
        <div className='main-container'>
            <div className="card-container">
                {
                    cards.map(card => <Card
                        card={card} key={card.id}></Card>)
                }
            </div>
            <div className="info-container">
               
            </div>
        </div>
    );
};

export default Main;