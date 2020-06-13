import React from 'react';
import Cardinfo from './Cardinfo';

import './Card.css';

function Card(props) {
    return (
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className='g-card-image mm' src={props.item.imgSrc} alt={props.item.Src} />
            { props.item.selected && <Cardinfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );
}

export default Card;