import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';
import { setCities } from '../actions';


class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="city-list">
        {this.props.cities.map(city => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setCities },
    dispatch
  );
};

const mapReduxStateToProps = (reduxState) => {
  return {
    cities: reduxState.cities
  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
