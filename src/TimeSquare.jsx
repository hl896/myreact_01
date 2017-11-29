import React from 'react';

import './styles/clock.css';


function padZero(n){

    if(n<10){

        return `0${n}`;
    
    }
    
    return `${n}`;

}

export default function TimeSquare({number}){

    return (
        
        <span className="jr-clock_square2">{number}</span>
    
    );
    
}

       