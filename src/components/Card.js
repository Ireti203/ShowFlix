import React from 'react';

import noImage from '../utils/no-image-available.png';
import '../styles/Layout.css';


const Card = ({ image, title}) => {
  return (
    <div className='image-list'>
        <img src={image} className='movies'/>
    </div>
  );
};

export default Card;