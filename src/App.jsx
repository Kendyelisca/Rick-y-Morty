import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getRandomNumber } from './utiles/getRandomNumber';
import Location from './components/Location';
import ResidentInfo from './components/ResidentInfo';
import ResidentList from './components/ResidentList';
import './index.css';
const App = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [idLocationValue, setidLocationValue] = useState('');

  const getIdLocationRandom = () => getRandomNumber(1, 126);

  const loadLocationInfo = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    try {
      const res = await axios.get(url);

      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const idLocationHandleChange = (e) => {
    const newValue = e.target.value;
    if (/^\d{0,3}$/.test(newValue)) setidLocationValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idLocationValue) loadLocationInfo(idLocationValue);
    else loadLocationInfo(getIdLocationRandom());
  };

  useEffect(() => {
    loadLocationInfo(getIdLocationRandom());
  }, []);

  return (
    <div className="big-container">
      <div className="topIm">
        <img src={'./mortyApp.webp'} alt="" className="imageStyle " />
      </div>
      <div className="topText">
        <h1>Rick and Morty Wiki Locations</h1>
      </div>
      <form className="form">
        <input
          className="text-black input-text"
          type="search"
          name="id-location"
          value={idLocationValue}
          onChange={idLocationHandleChange}
          placeholder="Type a number between 1 and 126"
        />
        <input
          className="input-submit"
          onClick={handleSubmit}
          type="submit"
          value="Search"
        />
      </form>
      <div className="Greenbar"></div>
      <div className="residentes">
        {locationInfo && <Location {...locationInfo} />}
        {locationInfo && <ResidentList residents={locationInfo.residents} />}
        <footer className="footer">&copy; Made with love in Academlo.</footer>
      </div>
    </div>
  );
};

export default App;
