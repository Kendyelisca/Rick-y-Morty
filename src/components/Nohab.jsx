import React from 'react';
import mage from '../assets/rick.webp';
import '../index.css';

const Nohab = () => {
  return (
    <div className="nohab">
      <p>No habitants to show now..</p>
      <div className="mage">
        <img src={mage} alt="No habitants" />
      </div>
    </div>
  );
};

export default Nohab;
