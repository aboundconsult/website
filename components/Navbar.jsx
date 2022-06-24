import styles from '../styles/Navbar.module.css';
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src="/img/logo.png" width={150}
        height={150} alt="Logo" />
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/Donate">donate</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/Development">Development</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/Paths">Careers</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar