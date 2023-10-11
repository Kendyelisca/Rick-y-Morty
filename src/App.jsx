import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getRandomNumber } from './utiles/getRandomNumber';
import Location from './components/Location';
import ResidentList from './components/ResidentList';
import './index.css';
import Footer from './components/Footer';
import Nohab from './components/Nohab';
import Header from './components/Header';

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
    <>
      <Header
        idLocationHandleChange={idLocationHandleChange}
        idLocationValue={idLocationValue}
        handleSubmit={handleSubmit}
      />
      {locationInfo && <Location {...locationInfo} />}
      {locationInfo && <ResidentList residents={locationInfo.residents} />}
      {locationInfo && locationInfo.residents.length === 0 && <Nohab />}
      <Footer />
    </>
  );
};

export default App;
