import { useEffect, useState } from "react";
import { Weather } from "../types/weather";

import { weatherMock } from "../API/mock";

type useGetWeatherType = {
  weather: Weather[];
};

const API = `https://api.openweathermap.org/data/2.5/forecast?appid=${
  import.meta.env.VITE_API_KEY
}&q=San Salvador&units=metric`;
export default function useGetWeather(): useGetWeatherType {
  const [weather, setWeather] = useState<Weather[]>([]);

  const getWeather = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setWeather([data]);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(weather);
  useEffect(() => {
    getWeather();
    // setWeather([weatherMock]);
  }, []);

  return { weather };
}
