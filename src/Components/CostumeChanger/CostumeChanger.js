import React, { useState } from 'react';
import jacket from '../../img/jacket.jpg';
import tankTop from '../../img/tank-top.jpg';
import classicJacket from '../../img/classic-jacket.jpg';
import classicTankTop from '../../img/classic-tank-top.jpg';
import noir from '../../img/noir.jpg';
import military from '../../img/military.jpg';
import elzaWalker from '../../img/elza-walker.jpg';
import './CostumeChanger.css';

export default function CostumeChanger() {

  const [costume, changeCostume] = useState(jacket);

  return (
    <section>
      <ul>
        <li onMouseOver={() => changeCostume(jacket)}>Jacket</li>
        <li onMouseOver={() => changeCostume(tankTop)}>Tank Top</li>
        <li onMouseOver={() => changeCostume(classicJacket)}>Class Jacket</li>
        <li onMouseOver={() => changeCostume(classicTankTop)}>Classic Tank Top</li>
        <li onMouseOver={() => changeCostume(noir)}>Noir</li>
        <li onMouseOver={() => changeCostume(military)}>Military</li>
        <li onMouseOver={() => changeCostume(elzaWalker)}>Elza Walker</li>
      </ul>
      <img src={costume} alt='Costume' />
    </section>
  )
}
