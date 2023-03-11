import { Routes, Route, Link } from 'react-router-dom';

import CardIm from './cardim.png';
import './shop-item.css';

function test() {
  alert(1);
}

export const ShopItem = (props) => {

  const { onToggleIncrease } = props;
 

  return (
   <Link to="/testprops">
      {' '}
      <div className='card' onClick={onToggleIncrease}>
        <img src={CardIm} alt='cardImage' className='cardImage' />
        <p className='cardName'> {props.name} </p>
        <p className='cardCountry'>{props.country}</p>
        <p className='cardPrice'>{props.price}$</p>
        <button className="shopItemButton">buy</button>
      </div>{' '}
      </Link>
  );
};
