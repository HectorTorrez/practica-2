import { useEffect, useState } from "react";
import { Weather } from "../types/weather";

import { getWeather } from "../components/helpers/getWeather";

type useGetWeatherType = {
  weather: Weather[];
};

export default function useGetWeather(city: string): useGetWeatherType {
  const [weather, setWeather] = useState<Weather[]>([]);

  const getData = async () => {
    //validacion para cuando el usuario no escriba una ciudad, este por defecto sea san salvador
    const newCity = city.length === 0 ? "san salvador" : city;
    const data = await getWeather(newCity);
    setWeather([data]);
  };

  useEffect(() => {
    getData();
  }, [city]);

  return { weather };
}
