import styles from "./app.module.css";
import CurrentDayCard from "./components/CurrentDay/CurrentDayCard";
import Navbar from "./components/Navbar/Navbar";
import useGetWeather from "./hooks/useGetWeather";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";
import { useState } from "react";
import Errors from "./components/Errors/Errors";

function App() {
  const [input, setInput] = useState("san salvador");

  const handleSearch = (search: string) => {
    setInput(search);
  };
  const { weather } = useGetWeather(input);

  return (
    <main className={styles["main"]}>
      <Navbar handleSearch={handleSearch} />
      <section className={styles["current-day"]}>
        <p className={styles["current-day--title"]}>Día actual</p>

        <>
          {weather?.map((day) =>
            day.cod === "200" ? (
              <section key={day.city.id}>
                <CurrentDayCard
                  city={day.city}
                  currentDay={day?.list[0] ?? []}
                />
                <section className={styles["forecast-days"]}>
                  {day?.list.map((item, index) => {
                    return <WeatherForecast key={index} currentDay={item} />;
                  })}
                </section>
              </section>
            ) : (
              // <div className={styles['main-errors']}>{day.message}</div>
              <Errors error={day.message} />
            )
          )}
        </>
      </section>
    </main>
  );
}

export default App;
