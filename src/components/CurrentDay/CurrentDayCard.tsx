import { CurrentDayCardCity } from "../../types/CurrentDayCardProps";
import { Humidity, Temperature, Wind } from "../Icons/Icons";
import {
  humidityColor,
  sizeIcons,
  temperatureColor,
  windColor,
} from "../helpers/iconColors";
import styles from "./currentDay.module.css";

export default function CurrentDayCard({
  city,
  currentDay,
}: CurrentDayCardCity) {
  const day = new Date(currentDay.dt * 1000);
  const dayName = day.toLocaleDateString("es-ES", {
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
            <Humidity width={sizeIcons} color={humidityColor} /> Humedad:{" "}
            {currentDay.main.humidity}%
          </p>
          <p>
            <Wind width={sizeIcons} color={windColor} />
            Viento: {""}
            {currentDay.wind.speed} m/s
          </p>
          <p>
            <Temperature width={sizeIcons} color={temperatureColor} /> Sensacion
            termica: {""}
            {currentDay.main.feels_like.toFixed()}°
          </p>
        </section>
        <section className={styles["card-description--temperature"]}>
          <p>
            <Temperature width={sizeIcons} color={temperatureColor} />{" "}
            {currentDay.main.temp.toFixed()}°
          </p>
        </section>
      </section>
    </section>
  );
}
