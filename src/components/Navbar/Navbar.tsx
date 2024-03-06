import styles from "./navbar.module.css";
import SearchByText from "../SearchByText/SearchByText";

type NavbarProps = {
  handleSearch: (value: string) => void;
};

export default function Navbar({ handleSearch }: NavbarProps) {
  return (
    <header className={styles["header"]}>
      <nav className={styles["navbar"]}>
        <SearchByText handleSearch={handleSearch} />
      </nav>
    </header>
  );
}
