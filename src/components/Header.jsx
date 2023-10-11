import React from 'react';

const Header = (props) => {
  return (
    <>
      {' '}
      <div className="topIm">
        <img src={'./mortyApp.webp'} alt="" className="imageStyle " />
      </div>
      <div className="topText">
        <h1>Rick and Morty Wiki Locations</h1>
      </div>
      <div className="form-container">
        <form className="form">
          <input
            className="text-black input-text"
            type="search"
            name="id-location"
            value={props.idLocationValue}
            onChange={props.idLocationHandleChange}
            placeholder="Type a number between 1 and 126"
          />
          <input
            className="input-submit"
            onClick={props.handleSubmit}
            type="submit"
            value="Search"
          />
        </form>
      </div>
    </>
  );
};

export default Header;
