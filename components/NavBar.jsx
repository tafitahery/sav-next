import styles from '../styles/Navbar.module.css';

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>.MFP SAV</div>
      <div className={styles.hamburger}>
        <span className={styles.element}></span>
        <span className={styles.element}></span>
        <span className={styles.element}></span>
      </div>
    </div>
  );
}
