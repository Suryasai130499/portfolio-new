import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Bio = () => {
  return (
    <div className={styles.bioWrapper}>
      <p>Bio</p>
      <img
        src="/images/dots.webp"
        alt="Dots"
        className={styles.dots}
      />
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img
            src="https://via.placeholder.com/500/888888/FFFFFF?Text=Down.com"
            alt=""
          />
        </div>
        <div className={styles.text}>
          A highly skilled and experienced front-end developer with a strong
          background in <b>React, Redux, NextJs, and TypeScript</b>. Skilled in
          designing and developing responsive, user-friendly web applications
          that are optimized for performance and scalability. Proficient in
          using modern web development technologies and frameworks to deliver
          efficient and maintainable code. <b>Strong problem-solving skills</b>{' '}
          and a passion for delivering exceptional user experiences. Proven
          ability to work well in fast-paced, collaborative and dynamic
          environments.{' '}
          <b>Strong understanding of web development principles</b>, including
          front-end and back-end development. Proven ability to work well with
          cross-functional teams to deliver projects on time and within budget.
        </div>
      </div>
      <button className={styles.button}>
        <Link to={'/projects'}>Go To Projects &#8594;</Link>
      </button>
    </div>
  );
};

export default Bio;
