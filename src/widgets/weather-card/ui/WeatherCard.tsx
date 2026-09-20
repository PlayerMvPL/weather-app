import { useWeatherStore } from "@/entities/weather/model/WeatherContext";
import { useFetchWeather } from "@/features/fetch-weather/model/useFetchWeather";
import styles from "./WeatherCard.module.scss";

const WeatherCard = () => {
  const { weatherData, isLoading, error } = useWeatherStore();
  const { currentCity } = useFetchWeather();

  if (isLoading) return <div>Loading the weather...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!weatherData) return <div>Choose the city</div>;

  const { temp, feels_like } = weatherData.main;
  const weatherInfo = weatherData.weather[0];

  return (
    <div className={`${styles.weatherCard}`}>
      <h2>{currentCity?.title}</h2>

      <div className={`${styles.weatherImage}`}>
        <img
          src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
          alt={weatherInfo.description}
        />
        <span>{Math.round(temp)}°C</span>
      </div>
      <p>
        {weatherInfo.description.charAt(0).toUpperCase() +
          weatherInfo.description.slice(1)}
      </p>
      <p className="weather-card__feels">
        Feels like: {Math.round(feels_like)}°C
      </p>
    </div>
  );
};

export default WeatherCard;
