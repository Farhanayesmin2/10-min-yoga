import React from 'react';
import Profile from '../Profile/Profile';

const Info = ({items}) => {

    let times = 0;
   
    for (const item of items) {
        times = times + item.time;  
    }
    return (
        <div>
     <Profile></Profile>
            <p>Time:{times}s </p>
        </div>
    );
};

export default Info;