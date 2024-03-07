import { CurrentDayCardProps } from "../../types/CurrentDayCardProps";
import {
  ArrowDown,
  ArrowUp,
  Humidity,
  Temperature,
  Wind,
} from "../Icons/Icons";
import {
  humidityColor,
  sizeIcons,
  temperatureColor,
  windColor,
} from "../../helpers/iconColors";
import styles from "./weatherForecast.module.css";

export default function WeatherForecast({ currentDay }: CurrentDayCardProps) {
  const day = new Date(currentDay.dt * 1000);
  const dayName = day.toLocaleDateString("es-ES", {
    weekday: "long",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: true,
  });

  const icon = `https://openweathermap.org/img/wn/${currentDay?.weather[0].icon}@2x.png`;

  return (
    <section className={styles["card-day"]}>
      <section className={styles["card-header"]}>
        <section className={styles["card-header--text"]}>
          <p>{currentDay?.weather[0].description}</p>
          <p>{dayName}</p>
        </section>
        <img src={icon} alt={icon + "icon"} />
      </section>
      <section className={styles["card-descriptions"]}>
        <section>
          <p>
            <Humidity width={sizeIcons} color={humidityColor} /> Humedad:{" "}
            {currentDay.main.humidity}%
          </p>
          <p>
            <Wind width={sizeIcons} color={windColor} />
            Viento: {""}
            {currentDay.wind.speed} m/s
          </p>
        </section>
        <section className={styles["card-description--temperature"]}>
          <p>
            <Temperature width={sizeIcons} color={temperatureColor} />{" "}
            {currentDay.main.temp_max.toFixed()}°
            <ArrowUp width="20px" color={humidityColor} />
          </p>
          <p>
            <Temperature width={sizeIcons} color={temperatureColor} />{" "}
            {currentDay.main.temp_min.toFixed()}°
            <ArrowDown width="20px" color={humidityColor} />
          </p>
        </section>
      </section>
    </section>
  );
}
