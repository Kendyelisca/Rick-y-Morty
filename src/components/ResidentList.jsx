import React from 'react';
import ResidentInfo from './ResidentInfo';
import '../index.css';

const ResidentList = ({ residents }) => {
  return (
    <section className="resident">
      {residents.map((resident) => (
        <ResidentInfo key={resident} urlResident={resident} />
      ))}
    </section>
  );
};

export default ResidentList;
