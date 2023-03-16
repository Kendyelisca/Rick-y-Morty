import React from 'react';
import '../index.css';
import mage from '../assets/rick.webp';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <section className="pink-bar">
      <h2>{name}</h2>
      <ul>
        <li>
          <span>Type: </span>
          {type}
        </li>
        <li>
          <span>Dimension: </span>
          {dimension}
        </li>
        <li>
          <span>Population: </span>
          {residents.length}
          {residents.length === 0 && (
            <div className="nohab">
              <p>No habitants to show now..</p>
              <img className="mage" src={mage} alt="" />
            </div>
          )}
        </li>
      </ul>
    </section>
  );
};

export default Location;
