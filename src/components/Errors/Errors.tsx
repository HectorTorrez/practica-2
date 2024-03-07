import styles from "./errors.module.css";

export default function Errors({ error }: { error: string }) {
  let newError;
  if (error === "city not found") {
    newError = "Ciudad no encontrada.";
  } else if (error === "wrong latitude") {
    newError = "Datos geográficos no encontrados.";
  } else {
    newError = error;
  }
  return <div className={styles["main-errors"]}>{newError}</div>;
}
