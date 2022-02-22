import React from 'react'
import styles from './projects.module.scss';
import jump from '../../media/jump.png';
import plane from '../../media/plane.png';
import maze from '../../media/maze.png';
// import cyber from '../media/cyber.png';
// import it from '../media/it.png';
// import packet from '../media/packet.png';



type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Unity</h1>
      
      <div className={styles.containerimg}>
        <img id={styles.img1} src={jump} alt="jumpgame" />
        <img id={styles.img2} src={plane} alt="planegame" />
        <img id={styles.img3} src={maze} alt="mazegame" />
      </div>
    </div>
  )
}

export default Projects
