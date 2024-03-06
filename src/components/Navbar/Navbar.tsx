import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles["header"]}>
      <nav className={styles["navbar"]}>
        <form className={styles["form"]}>
          <label htmlFor="search">
            <input type="text" id="search" placeholder="Search" />
          </label>
          <button>Buscar</button>
        </form>
      </nav>
    </header>
  );
}
