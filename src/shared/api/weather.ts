const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const fetchWeatherByCity = async (city: string) => {
  const response = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=en`,
  );

  if (!response.ok) {
    throw new Error("City not found or network error");
  }

  return response.json();
};

export default fetchWeatherByCity;
