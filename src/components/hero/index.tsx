import styles from './index.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img
        src="/images/hero.jpg"
        alt="Hero"
      />
      <span className={styles.overlay} />
      <div className={styles.text}>
        <h1 className={styles.name}>INDUKURI SURYA SAI HARISCHANDRA PRASAD</h1>
        <p className={styles.description}>
          I'm a <b>Frontend</b> Developer
        </p>
      </div>
    </div>
  );
};

export default Hero;
