import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render () {
    const { city } = this.props;
    return (
      <div className="city" onClick={this.handleClick} role="button" tabIndex="0">
        <p>{city.name}</p>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectCity },
    dispatch
  );
};

const mapReduxStateToProps = (state) => {
  return {
    selectCity: state.selectCity,
  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(City);
