import React from 'react';

const Card = (props) => {
    const { card } = props;
    const { name, id, time, img } = card;
    console.log(props);
    return (
        <div>
            <h1>Name:{name}</h1>
            <img src={img} alt="hello" />
        </div>
    );
};

export default Card;