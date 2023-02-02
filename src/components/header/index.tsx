import { useRef, useEffect } from 'react';
import styles from './index.module.css';

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) {
        return;
      }
      if (window.scrollY > 0) {
        ref.current.classList.add(styles.scrolled);
      } else {
        ref.current.classList.remove(styles.scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={styles.head}
    >
      <div className={styles.header}>
        <p className={styles.home}>SURYA</p>
        <div className={styles.contents}>
          <p className={styles.content}>Projects</p>
          <p className={styles.content}>Skills</p>
          <p className={styles.content}>About</p>
          <p className={styles.content}>Resume</p>
        </div>
        <p className={styles.contact}>Contact</p>
      </div>
    </div>
  );
};

export default Header;
