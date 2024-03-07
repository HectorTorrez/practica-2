import { useEffect, useState } from "react";
import { Weather } from "../types/weather";

import { getWeather } from "../helpers/getWeather";

type useGetWeatherType = {
  weather: Weather[];
  loading: boolean;
};

export default function useGetWeather(city: string): useGetWeatherType {
  const [weather, setWeather] = useState<Weather[]>([]);
  const [loading, setloading] = useState(false);
  const getData = async () => {
    try {
      setloading(true);
      //validacion para cuando el usuario no escriba una ciudad, este por defecto sea san salvador
      const newCity = city.length === 0 ? "san salvador" : city;
      const data = await getWeather(newCity);
      setloading(false);
      setWeather([data]);
    } catch (error) {
      setloading(false);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [city]);

  return { weather, loading };
}
