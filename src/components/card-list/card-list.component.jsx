import React from "react";
import './card-list.style.css'
import {Card} from '../card/card.component.jsx'

export const CardList = props => {
    
    return <div className="card-list">{
        props.monsters.map(monsters => (
            <Card key={monsters.id} monsters={monsters}/>
        ))    
    }</div>
};