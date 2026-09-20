import { useWeatherStore } from "@/entities/weather/model/WeatherContext";
import { useEffect } from "react";

const RAIN_IMAGE_PATH = "/rain.jpg";

const rainImagePreload = new Image();
rainImagePreload.src = RAIN_IMAGE_PATH;

export const useWeatherTheme = () => {
  const { weatherData, isLoading } = useWeatherStore();

  useEffect(() => {
    const bodyStyle = document.body.style;

    if (isLoading) {
      bodyStyle.setProperty("--bg-color", "var(--color-dark-1)");
      bodyStyle.setProperty("--bg-image", "none");
      return;
    }

    if (weatherData?.weather?.[0]) {
      const weatherMain = weatherData.weather[0].main.toLowerCase();

      if (weatherMain === "clear") {
        bodyStyle.setProperty("--bg-color", "#d48609"); // Желтый
        bodyStyle.setProperty("--bg-image", "none");
      } else if (weatherMain === "rain" || weatherMain === "drizzle") {
        bodyStyle.setProperty("--bg-color", "#93a2a9");
        bodyStyle.setProperty("--bg-image", `url("${RAIN_IMAGE_PATH}")`); // Картинка дождя
      } else {
        bodyStyle.setProperty("--bg-color", "#cfd8dc"); // Облачно/Остальное
        bodyStyle.setProperty("--bg-image", "none");
      }
    }

    return () => {
      bodyStyle.removeProperty("--bg-color");
      bodyStyle.removeProperty("--bg-image");
    };
  }, [weatherData, isLoading]);
};
