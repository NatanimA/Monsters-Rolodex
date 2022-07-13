import React from "react";
import './card.styles.css'

export const Card = props => (
    <div>
        
        <h1 className='card-container'>
            <img alt="monsters" 
                src={`https://robohash.org/ ${props.monsters.id};set=set2`}>

                </img>
            
            {props.monsters.name}
        </h1>
    </div>
)