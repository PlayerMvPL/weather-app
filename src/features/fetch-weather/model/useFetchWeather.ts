import { useWeatherStore } from "@/entities/weather/model/WeatherContext";
import fetchWeatherByCity from "@/shared/api/weather";
import CITIES from "@/shared/const/cities";
import { useEffect, useRef } from "react";

export const useFetchWeather = () => {
  const { selectedCityId, setWeatherData, setIsLoading, setError } =
    useWeatherStore();

  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentCity = CITIES.find((city) => city.id === selectedCityId);

  useEffect(() => {
    if (!currentCity) return;

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    setIsLoading(true);
    setError(null);

    const loadData = async () => {
      try {
        const data = await fetchWeatherByCity(currentCity.title);
        setWeatherData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setWeatherData(null);
      } finally {
        setIsLoading(false);
      }
    };

    debounceTimerRef.current = setTimeout(() => {
      loadData();
    }, 500);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [selectedCityId]);

  return {
    currentCity,
  };
};
