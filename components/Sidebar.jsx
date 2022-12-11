import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar({ isHidden }) {
  return (
    <div
      className={
        isHidden ? `${styles.container} ${styles.hidden}` : styles.container
      }
    >
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/intervention">Intervention</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/client">Client</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/machine">Machine</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/techician">Technicien</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/report">Rapport</Link>
        </li>
      </ul>
    </div>
  );
}
