// import styles from "./weatherForecast.module.css";

// export default function WeatherForecast({}) {
//   return (
//     <section className={styles["card-day"]}>
//       <section className={styles["card-header"]}>
//         <p>{dayName}</p>
//         <img src={icon} alt={icon + "icon"} />
//       </section>
//       <section className={styles["card-descriptions"]}>
//         <section>
//           <p>
//             <Humidity width="20" color="#0077ff" /> Humidity:{" "}
//             {currenDay.main.humidity}%
//           </p>
//           <p>
//             <Wind width="20" color="#ffffff" />
//             Wind: {""}
//             {currenDay.wind.speed} meter/sec
//           </p>
//           <p>
//             <Temperature width="20" color="#ff0000" /> Feels Like: {""}
//             {currenDay.main.feels_like.toFixed()}°
//           </p>
//         </section>
//         <section className={styles["card-description--temperature"]}>
//           <p>
//             <Temperature width="20" color="#ff0000" />{" "}
//             {currenDay.main.temp.toFixed()}°
//           </p>
//         </section>
//       </section>
//     </section>
//   );
// }
