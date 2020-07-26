import React , { useState, useEffect } from "react";
const API_WEATHER = "http://localhost:8888/weather-service/weathers";
// Stateless component
class Weather extends React.Component {
  state = {
    data: {
      weather: [
        {
          main: "",
          description: ""
        }
      ],
      main: {
        temp: 0
      }
    }
  };
//마운트
  componentDidMount() {
    const { cityName } = this.props.match.params;
    console.log("cityName : ", cityName);

    const { data } = this.state;

    const api = `${API_WEATHER}?cityName=${cityName}`;

    fetch(api)
      .then(res => res.json())
      .then(data_ => this.setState({
        data: data_
      }))
      .catch(err => console.warn(`ERROR occurs : ${err.message}`));

  }
  render() {

    const { cityName } = this.props.match.params;
    const { data } = this.state;

    const weather_main = data.weather[0].main;
    const weather_description = data.weather[0].description;
    const celsius = (data.main.temp - 273.15).toFixed(2);
    return (
      <div>
        <p>도시이름 : {cityName}</p>
        <p>날씨 : {weather_main}</p>
        <p>날씨 상세 : {weather_description}</p>
        <p>온도 : {celsius}</p>
      </div>
    );
  }

};
export default Weather;