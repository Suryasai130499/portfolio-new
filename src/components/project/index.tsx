import styles from './index.module.css';
import { ProjectType } from '../../../interfaces';

interface PropTypes {
  project: ProjectType;
  reverse: boolean;
}

const Project = ({ project, reverse }: PropTypes) => {
  return (
    <div
      style={{
        flexDirection: `${reverse ? 'row-reverse' : 'row'}`,
      }}
      className={styles.project}
    >
      <div className={styles.image}>
        <a href={project.url}>
          <img
            src={project.img}
            alt="Project"
          />
        </a>
      </div>
      <div className={styles.description}>
        <h4 className={styles.title}>{project.name}</h4>
        <p className={styles.descript}>{project.description}</p>
        <div className={styles.techs}>
          <div className={styles.techUsed}>Technologies Used: </div>
          <div className={styles.techNames}>
            {project.tech.map((tech, index) =>
              index === project.tech.length - 1 ? (
                <p key={index}>{tech}.</p>
              ) : (
                <p key={index}>{tech},</p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
