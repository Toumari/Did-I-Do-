import { useState, useEffect } from "react";
import "./WeatherComponent.css";

export default function WeatherComponent(props) {
  const [isBusy, setIsBusy] = useState(true);
  const [weather, setWeather] = useState({
    temp: 0,
    feelsLike: 0,
    description: "",
    icon: "",
  });

  useEffect(() => {
    fetch(`https://express-app-test-jackimas141.herokuapp.com/${props.city}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          console.log(Math.floor(data.main.temp));
          setWeather({
            cityName: data.name,
            temp: Math.floor(data.main.temp),
            feelsLike: Math.floor(data.main.feels_like),
            description: data.weather[0].description,
            icon: data.weather[0].icon,
          });
        } else {
          setWeather({
            cityName: "Location not found",
            temp: "N/A",
            feelsLike: 0,
            description: "",
            icon: "",
          });
        }
      });
    setIsBusy(false);
  }, []);

  return (
    <div className="weather">
      {isBusy && <p>Loading...</p>}
      {!isBusy && (
        <div className="weather__container">
          <div className="weather__container__temp">
            <p className="weather__change__location" onClick={props.onClick}>
              Change Location
            </p>
            <p className="weather__city">{weather.cityName}</p>
            <h1 className="weather__temp__text">
              {typeof weather.temp === "number"
                ? Math.floor(weather.temp) + "°C"
                : ""}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
