import React from 'react';
import mage from '../assets/rick.webp';
import '../index.css';

const Nohab = () => {
  return (
    <div className="nohab">
      <p>No habitants to show now..</p>
      <img className="mage" src={mage} alt="" />
    </div>
  );
};

export default Nohab;
