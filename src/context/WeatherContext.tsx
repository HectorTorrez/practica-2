import { createContext } from "react";
import { Weather } from "../types/weather";
import useGetWeather from "../hooks/useGetWeather";

export const WeatherContext = createContext({
  weather: [] as Weather[],
});

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { weather } = useGetWeather();

  console.log(weather);

  return (
    <WeatherContext.Provider value={{ weather }}>
      {children}
    </WeatherContext.Provider>
  );
};
