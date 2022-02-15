import React from 'react'
import styles from './projects.module.scss';
import workimg from '../../media/work.png';

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <img src={workimg} alt="my work" />
    </div>
  )
}

export default Projects
