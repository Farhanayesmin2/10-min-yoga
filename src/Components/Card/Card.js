import React from 'react';

const Card = (props) => {
    const { card ,handleAddToCart} = props;
    const { name, id, time, img,calorie,ratings } = card;
    console.log(props);
    return (
       
        <div  >
            <div className="card  bg-base-100 shadow-xl font-serif">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl h-48" />
  </figure>
  <div className="card-body  ">
                    <h2 className="card-title">{name}</h2>
                    <h3 className=''>Calorie: {calorie }</h3>
                    <p className='font-semibold'>Time Required: {time}s</p>
                    <p>Ratings: {ratings} <span> </span>  </p>
    <div className="card-actions">
      <button onClick={() => handleAddToCart(card)} className="btn btn-primary items-center w-full">Add To List</button>
    </div>
  </div>
                
                </div>
        </div>
    );
};

export default Card;