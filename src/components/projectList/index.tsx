import styles from './index.module.css';
import { ProjectType } from '../../../interfaces';

import Project from '../project';

const ProjectList = () => {
  const projects: ProjectType[] = [
    {
      name: 'Netflix Clone',
      url: 'https://github.com/Suryasai130499/netflix-clone',
      img: '/images/Netflix.png',
      tech: ['Nextjs', 'Redux', 'CSS Modules', 'Monaco Editor'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium ex excepturi dignissimos tempora dicta, voluptatibus autem adipisci perspiciatis soluta voluptatem ipsum rerum rem. Nam sunt consectetur hic delectus nostrum.',
    },
    {
      name: 'Codepen Clone',
      url: 'https://github.com/Suryasai130499/Codepen-Clone',
      img: '/images/Codepen.png',
      tech: ['React', 'Redux', 'CSS Modules'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium ex excepturi dignissimos tempora dicta, voluptatibus autem adipisci perspiciatis soluta voluptatem ipsum rerum rem. Nam sunt consectetur hic delectus nostrum.',
    },
    {
      name: 'LinkedIn Clone',
      url: 'https://github.com/Suryasai130499/LinkedIn-Clone',
      img: '/images/Linkedin.png',
      tech: ['React', 'Redux', 'Styled Components', 'Firebase'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium ex excepturi dignissimos tempora dicta, voluptatibus autem adipisci perspiciatis soluta voluptatem ipsum rerum rem. Nam sunt consectetur hic delectus nostrum.',
    },
    {
      name: 'Feedback Sharing',
      url: 'https://github.com/Frontend-Mentor-130499/productFeedback',
      img: '/images/Feedback.jpg',
      tech: ['Qwik', 'Nodejs', 'Express', 'MongoDB'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium ex excepturi dignissimos tempora dicta, voluptatibus autem adipisci perspiciatis soluta voluptatem ipsum rerum rem. Nam sunt consectetur hic delectus nostrum.',
    },
    {
      name: 'Dictionary App',
      url: 'https://google.com',
      img: '/images/Dictionary.webp',
      tech: ['React', 'Vite', 'Zustand', 'CSS Modules'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium ex excepturi dignissimos tempora dicta, voluptatibus autem adipisci perspiciatis soluta voluptatem ipsum rerum rem. Nam sunt consectetur hic delectus nostrum.',
    },
    {
      name: 'Invoice App',
      url: 'https://google.com',
      img: '/images/invoice.webp',
      tech: ['HTML5', 'CSS3', 'Vanilla js', 'MongoDB', 'Nodejs', 'Express'],
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium ex excepturi dignissimos tempora dicta, voluptatibus autem adipisci perspiciatis soluta voluptatem ipsum rerum rem. Nam sunt consectetur hic delectus nostrum.',
    },
  ];

  return (
    <div className={styles.ListWrapper}>
      {projects.map((project, index) => (
        <Project
          key={index}
          project={project}
          reverse={index % 2 === 0 ? false : true}
        />
      ))}
    </div>
  );
};

export default ProjectList;
