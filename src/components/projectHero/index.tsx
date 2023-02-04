import React from 'react';
import styles from './index.module.css';

const ProjectHero = () => {
  return (
    <div className={styles.hero}>
      <img
        src="/images/projects-hero.jpg"
        alt="Hero"
      />
      <span className={styles.overlay} />
      <div className={styles.text}>
        <h1 className={styles.name}>PROJECTS</h1>
      </div>
    </div>
  );
};

export default ProjectHero;
