import { useWeatherTheme } from "@/entities/weather-themes/model/useWeatherTheme";
import ChangeCity from "@/widgets/change-city/ui/ChangeCity";
import WeatherCard from "@/widgets/weather-card/ui/WeatherCard";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  useWeatherTheme();

  return (
    <main className={`home-page ${styles.pageContainer}`}>
      <ChangeCity />
      <WeatherCard />
    </main>
  );
};

export default HomePage;
