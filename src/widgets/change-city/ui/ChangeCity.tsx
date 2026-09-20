import { useWeatherStore } from "@/entities/weather/model/WeatherContext";
import SelectCity from "@/features/select-city/ui/SelectCity";
import styles from "./ChangeCity.module.scss";

const ChangeCity = () => {
  const { selectedCityId, setSelectedCityId } = useWeatherStore();

  return (
    <div className={`${styles.citySelector}`}>
      <label htmlFor="city-select">Choose the city:</label>
      <SelectCity
        id="city-select"
        value={selectedCityId}
        onChange={(event) => setSelectedCityId(event.target.value)}
      ></SelectCity>
    </div>
  );
};

export default ChangeCity;
