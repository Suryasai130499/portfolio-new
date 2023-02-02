import styles from './index.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.item}>Projects</p>
        <p className={styles.item}>Skills</p>
        <p className={styles.item}>Resume</p>
        <p className={styles.item}>About</p>
      </div>
    </div>
  );
};

export default Footer;
