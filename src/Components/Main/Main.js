import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Info from '../Info/Info';
import "./Main.css"

const Main = () => {
    const [cards, setCards] = useState([]);
       useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    
    const [items, setItems] = useState([]);

    const handleAddToInfo = (selectedProduct) => {
        let newItems = [];
        newItems  = [...items, selectedProduct];
        
        setItems(newItems);
        console.log(newItems);
    }
    
    return (
        
            <div className='main-container grid grid-cols-12 gap-4 relative mt-12'>
            

                
                <div className="card-container grid col-span-9  ">
          <div className='grid grid-cols-3 gap-4 md:cols-1'>
                {
                    cards.map(card => <Card
                        card={card}
                        handleAddToInfo={handleAddToInfo}
                        key={card.id}></Card>)
                    }
                 </div>
                </div>
                
            <div className="info-container bg-green-200 w-25 col-span-3 font-serif p-5 font-serif  sticky top-0  right-0 ">
              
                <Info items={items}></Info>
            </div>
            </div>
            
          
    );
};

export default Main;