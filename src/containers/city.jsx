import React, { Component } from 'react';

class City extends Component {
  handleClick = () => {
    const { city, selectFunction } = this.props;
    selectFunction(city);
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

export default City;
