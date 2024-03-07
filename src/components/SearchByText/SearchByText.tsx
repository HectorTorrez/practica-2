import { useState } from "react";
import styles from "./searchByText.module.css";

type SearchByTextProps = {
  handleSearch: (value: string) => void;
};

export default function SearchByText({ handleSearch }: SearchByTextProps) {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(inputText);
    setInputText("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles["form"]}>
      <label htmlFor="search">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          id="search"
          placeholder="San Salvador, sv"
          value={inputText}
        />
        <span>
          * Para buscar por posición geográfica utiliza la latitud y longitud
          así "13.6894/-89.1872"
          <p></p>
        </span>
      </label>
      <button disabled={inputText.length === 0}>Buscar</button>
    </form>
  );
}
