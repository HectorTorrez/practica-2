import styles from "./app.module.css";
import CurrentDayCard from "./components/CurrentDay/CurrentDayCard";
import Navbar from "./components/Navbar/Navbar";
import useGetWeather from "./hooks/useGetWeather";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";

function App() {
  const { weather } = useGetWeather();

  return (
    <main className={styles["main"]}>
      <Navbar />
      <section className={styles["current-day"]}>
        <p className={styles["current-day--title"]}>Current Day</p>
        {weather.map((day) => (
          <>
            <CurrentDayCard
              key={day.city.id}
              city={day.city}
              currentDay={day.list[0]}
            />
            <section className={styles["forecast-days"]}>
              {day.list.map((item) => {
                return (
                  <WeatherForecast
                    key={crypto.randomUUID()}
                    currentDay={item}
                  />
                );
              })}
            </section>
          </>
        ))}
      </section>
    </main>
  );
}

export default App;
