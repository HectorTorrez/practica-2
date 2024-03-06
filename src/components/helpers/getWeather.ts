export const getWeather = async (city = "san salvador") => {
  const API = `https://api.openweathermap.org/data/2.5/forecast?appid=${
    import.meta.env.VITE_API_KEY
  }&q=${city}&units=metric`;

  const response = await fetch(API);
  const data = await response.json();

  return data;
};