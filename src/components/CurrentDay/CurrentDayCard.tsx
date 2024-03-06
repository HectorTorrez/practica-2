import {
  CurrentDayCardCity,
  CurrentDayCardProps,
} from "../../types/CurrentDayCardProps";
import { Humidity, Temperature, Wind } from "../Icons/Icons";
import styles from "./currentDay.module.css";

export default function CurrentDayCard({
  city,
  currentDay,
}: CurrentDayCardCity) {
  const day = new Date(currentDay.dt * 1000);
  const dayName = day.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const icon = `https://openweathermap.org/img/wn/${currentDay?.weather[0].icon}@2x.png`;

  return (
    <section className={styles["card-day"]}>
      <section className={styles["card-header"]}>
        <section className={styles["card-header--info"]}>
          <h2>
            {city.name}
            <span>{city.country}</span>
          </h2>
          <p>{currentDay?.weather[0].description ?? ""}</p>
        </section>
        <img src={icon} alt={icon + "icon"} />
      </section>
      <section className={styles["card-descriptions"]}>
        <section className={styles["card-description--info"]}>
          <p>{dayName}</p>
          <p>
            <Humidity width="20" color="#0077ff" /> Humidity:{" "}
            {currentDay.main.humidity}%
          </p>
          <p>
            <Wind width="20" color="#ffffff" />
            Wind: {""}
            {currentDay.wind.speed} meter/sec
          </p>
          <p>
            <Temperature width="20" color="#ff0000" /> Feels Like: {""}
            {currentDay.main.feels_like.toFixed()}°
          </p>
        </section>
        <section className={styles["card-description--temperature"]}>
          <p>
            <Temperature width="20" color="#ff0000" />{" "}
            {currentDay.main.temp.toFixed()}°
          </p>
        </section>
      </section>
    </section>
  );
}
