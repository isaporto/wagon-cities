import React from 'react';

const ActiveCity = (props) => {
  const { city } = props;
  if (city) {
    return (
      <div className="active-city">
        <h3>{city.name}</h3>
        <p>{city.address}</p>
      </div>
    );
  }
  return <div className="active-city" />;
}

export default ActiveCity;
