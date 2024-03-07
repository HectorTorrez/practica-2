export const getWeather = async (city = "san salvador") => {
  let API;

  const coordinates = city.split("/");

  if (coordinates.length === 2) {
    const lat = coordinates[0].trim();
    const lon = coordinates[1].trim();

    API = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=sp&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`;
  } else {
    API = `https://api.openweathermap.org/data/2.5/forecast?appid=${
      import.meta.env.VITE_API_KEY
    }&q=${city}&units=metric&lang=sp`;
  }
  const response = await fetch(API);
  const data = await response.json();

  return data;
};
