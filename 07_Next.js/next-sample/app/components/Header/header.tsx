import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.headerimg}>
        <Link href="/">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={30}
            priority
          />
        </Link>
      </div>

      <nav className={styles.navi}>
        <ul className={styles.wrapper}>
          <li><a href="#">NEW</a></li>
          <li><a href="#">COLUMN</a></li>
          <li><a href="#">SERIES</a></li>
          <li><a href="#">Q&amp;A</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
