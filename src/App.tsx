import styles from "./app.module.css";
import CurrentDayCard from "./components/CurrentDay/CurrentDayCard";
import Navbar from "./components/Navbar/Navbar";
import useGetWeather from "./hooks/useGetWeather";

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
              currenDay={day.list[0]}
            />
            {/* <WeatherForecast key={day.} /> */}
          </>
        ))}
      </section>
    </main>
  );
}

export default App;
