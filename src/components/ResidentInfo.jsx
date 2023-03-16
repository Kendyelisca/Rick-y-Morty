import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';
import image1 from '../assets/heart.svg';
import image2 from '../assets/skull.png';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);
  const loadResidentInfo = async () => {
    try {
      const res = await axios.get(urlResident);
      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadResidentInfo();
  }, []);
  return (
    <>
      {residentInfo && (
        <div className="container">
          <article className="img-container">
            <div>
              <img className="img" src={residentInfo.image} alt={residentInfo.name} />
            </div>
            <h3>{residentInfo.name}</h3>
            <ul className="card___ul">
              <li>
                <span>Specie: </span>
                {residentInfo.species}
              </li>
              <li>
                <span>Status: </span>
                {residentInfo.status}
                {residentInfo.status === 'Alive' && (
                  <img className="image1" src={image1} alt="Alive Icon" />
                )}
                {residentInfo.status === 'Dead' && (
                  <img className="image2" src={image2} alt="Dead Icon" />
                )}
              </li>
              <li>
                <span>Origin: </span>
                {residentInfo.origin.name}
              </li>
              <li>
                <span>Appearance in episodes: </span>
                {residentInfo.episode.length}
              </li>
            </ul>
          </article>
        </div>
      )}
    </>
  );
};

export default ResidentInfo;
