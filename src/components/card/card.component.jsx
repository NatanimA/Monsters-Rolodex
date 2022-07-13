import React from "react";
import './card.styles.css'

export const Card = props => (
    <div>
        
        <h1 className='card-container'>
            <img alt="monsters" 
                src={`https://robohash.org/ ${props.monsters.id}?set=set2&size=200x200`}>

                </img>
            
            <h2>{props.monsters.name}</h2>
            <p>{props.monsters.email}</p>
            {}
        </h1>
    </div>
)