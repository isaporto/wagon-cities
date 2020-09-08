import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  const { selectedCity } = props;
  if (selectedCity) {
    return (
      <div className="active-city">
        <h3>{selectedCity.name}</h3>
        <p>{selectedCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${selectedCity.slug}`} alt={selectedCity.slug} />
      </div>
    );
  }
  return <div className="active-city" />;
};

const mapReduxStateToProps = (state) => {
  return {
    selectedCity: state.selectedCity,
  };
};

export default connect(mapReduxStateToProps)(ActiveCity);
