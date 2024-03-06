import { CurrentDayCardProps } from "../../types/CurrentDayCardProps";
import { Humidity, Temperature, Wind } from "../Icons/Icons";
import styles from "./currentDay.module.css";

export default function CurrentDayCard({
  city,
  currenDay,
}: CurrentDayCardProps) {
  const day = new Date(currenDay.dt * 1000);
  const dayName = day.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const icon = `https://openweathermap.org/img/wn/${currenDay.weather[0].icon}@2x.png`;

  return (
    <section className={styles["card-day"]}>
      <section className={styles["card-header"]}>
        <h2>
          {city.name}
          <span>{city.country}</span>
        </h2>
        <img src={icon} alt={icon + "icon"} />
      </section>
      <section className={styles["card-descriptions"]}>
        <section className={styles["card-description--info"]}>
          <p>{dayName}</p>
          <p>
            <Humidity width="20" color="#0077ff" /> Humidity:{" "}
            {currenDay.main.humidity}%
          </p>
          <p>
            <Wind width="20" color="#ffffff" />
            Wind: {""}
            {currenDay.wind.speed} meter/sec
          </p>
          <p>
            <Temperature width="20" color="#ff0000" /> Feels Like: {""}
            {currenDay.main.feels_like.toFixed()}°
          </p>
        </section>
        <section className={styles["card-description--temperature"]}>
          <p>
            <Temperature width="20" color="#ff0000" />{" "}
            {currenDay.main.temp.toFixed()}°
          </p>
        </section>
      </section>
    </section>
  );
}
