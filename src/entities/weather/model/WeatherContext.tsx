import CITIES from "@/shared/const/cities";
import { createContext, useContext, useState, type ReactNode } from "react";

interface WeatherData {
  main: { temp: number; feels_like: number };
  weather: Array<{ main: string; description: string; icon: string }>;
}

interface WeatherContextType {
  selectedCityId: string;
  setSelectedCityId: (id: string) => void;
  weatherData: WeatherData | null;
  setWeatherData: (data: WeatherData | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCityId, setSelectedCityId] = useState(CITIES[0].id);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <WeatherContext.Provider
      value={{
        selectedCityId,
        setSelectedCityId,
        weatherData,
        setWeatherData,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherStore = () => {
  const context = useContext(WeatherContext);
  if (!context)
    throw new Error("useWeatherStore should be inside WeatherProvider");
  return context;
};
