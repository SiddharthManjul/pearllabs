'use client';

import { useState, JSX } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoSymbol}>{"{"}</span>PEARL LABS
      </Link>
      
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/rd" className={styles.navLink}>R&D</Link>
        <Link href="/projects" className={styles.navLink}>Projects</Link>
        <Link href="/team" className={styles.navLink}>Team</Link>
      </div>
      
      <button 
        className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.menuIcon}></span>
      </button>
    </nav>
  );
};

export default Navbar;