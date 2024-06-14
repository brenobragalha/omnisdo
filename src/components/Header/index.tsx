import styles from "./style.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <img src="/public/logo.svg" alt="Omnisdo Logo" />
    </header>
  );
}
