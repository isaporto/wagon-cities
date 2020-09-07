import React from 'react';
import City from './city';

const CityList = (props) => {
  const { cities, selectFunction } = props;
  return (
    <div className="city-list">
      {cities.map((city) => {
        return (
          <City city={city} selectFunction={selectFunction} />
        );
      })}
    </div>
  );
};

export default CityList;
