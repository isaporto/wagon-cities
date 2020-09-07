import React, { Component } from 'react';
import CityList from '../containers/city_list';
import ActiveCity from './active_city';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [
        { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
        { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
        { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
      ],
      selectedCity: null,
    };
  }

  selectCity = (city) => {
    this.setState({ selectedCity: city });
  }

  render() {
    const { cities, selectedCity } = this.state;
    return (
      <div className="app">
        <CityList cities={cities} selectFunction={this.selectCity} />
        <ActiveCity city={selectedCity} />
      </div>

    );
  }
}

export default App;
