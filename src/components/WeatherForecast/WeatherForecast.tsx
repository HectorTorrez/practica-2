import { CurrentDayCardProps } from "../../types/CurrentDayCardProps";
import {
  ArrowDown,
  ArrowUp,
  Humidity,
  Temperature,
  Wind,
} from "../Icons/Icons";
import styles from "./weatherForecast.module.css";

export default function WeatherForecast({ currentDay }: CurrentDayCardProps) {
  const day = new Date(currentDay.dt * 1000);
  const dayName = day.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    hour: "2-digit",
  });

  const icon = `https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`;

  return (
    <section className={styles["card-day"]}>
      <section className={styles["card-header"]}>
        <section className={styles["card-header--text"]}>
          <p>{currentDay.weather[0].description}</p>
          <p>{dayName}</p>
        </section>
        <img src={icon} alt={icon + "icon"} />
      </section>
      <section className={styles["card-descriptions"]}>
        <section>
          <p>
            <Humidity width="20" color="#0077ff" /> Humidity:{" "}
            {currentDay.main.humidity}%
          </p>
          <p>
            <Wind width="20" color="#ffffff" />
            Wind: {""}
            {currentDay.wind.speed} meter/sec
          </p>
        </section>
        <section className={styles["card-description--temperature"]}>
          <p>
            <Temperature width="20" color="#ff0000" />{" "}
            {currentDay.main.temp_max.toFixed()}°
            <ArrowUp width="20px" color="#0077ff" />
          </p>
          <p>
            <Temperature width="20" color="#ff0000" />{" "}
            {currentDay.main.temp_min.toFixed()}°
            <ArrowDown width="20px" color="#0077ff" />
          </p>
        </section>
      </section>
    </section>
  );
}
