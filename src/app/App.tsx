import { WeatherProvider } from "@/entities/weather/model/WeatherContext";
import HomePage from "@/pages/HomePage";
import "./styles";

const App = () => {
  return (
    <WeatherProvider>
      <HomePage />
    </WeatherProvider>
  );
};

export default App;
