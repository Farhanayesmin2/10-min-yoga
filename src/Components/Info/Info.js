import React from 'react';

const Info = ({items}) => {

    let times = 0;
   
    for (const item of items) {
        times = times + item.time;  
    }
    return (
        <div>
            <h1>Helllo</h1>
            <p>Time:{times} </p>
        </div>
    );
};

export default Info;