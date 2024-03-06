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
    city === "" ? "san salvador" : city;
    const data = await getWeather(city);
    setWeather([data]);
  };

  useEffect(() => {
    getData();
  }, [city]);

  return { weather };
}
