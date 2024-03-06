import { ChangeEvent, useState } from "react";
import styles from "./navbar.module.css";
import { getWeather } from "../helpers/getWeather";

type NavbarProps = {
  handleSearch: (value: string) => void;
};

export default function Navbar({ handleSearch }: NavbarProps) {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(inputText);
  };

  return (
    <header className={styles["header"]}>
      <nav className={styles["navbar"]}>
        <form onSubmit={handleSubmit} className={styles["form"]}>
          <label htmlFor="search">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              id="search"
              placeholder="San Salvador, sv"
              value={inputText}
            />
          </label>
          <button>Buscar</button>
        </form>
      </nav>
    </header>
  );
}
