import React from 'react'
import styles from './projects.module.scss';
import jump from '../../media/jump.png';
import plane from '../../media/plane.png';
import maze from '../../media/maze.png';
import cyber from '../../media/cyber.png';
import it from '../../media/it.png';
import packet from '../../media/packet.png';
import homepage from '../../media/homepage.png';
import salt from '../../media/Salt.png';
import motorbike from '../../media/motorbike.png';



type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Unity Projects</h1>

      <div className={styles.containerimg}>
        <a href="https://play.unity.com/mg/other/saifs-unit-3-jumping-game" rel="noreferrer" target='_blank'><img id={styles.img1} src={jump} alt="jumpgame" /></a>
        <a href="https://play.unity.com/mg/other/plane-game-12" rel="noreferrer" target='_blank'><img id={styles.img2} src={plane} alt="planegame" /></a>
        <a href="https://play.unity.com/mg/other/maze-game-21" rel="noreferrer" target='_blank'><img id={styles.img3} src={maze} alt="mazegame" /></a>
      </div>

      <hr />
  
      <h1 id={styles.cisco}>Cisco certificates</h1>

      <div className={styles.certificateimg}>
        <a href="https://www.credly.com/earner/earned/badge/e4f4ad49-db92-4cf2-8dac-7a24d38447d3" rel="noreferrer" target='_blank'><img id={styles.img4} src={cyber} alt="cyber" /></a>
        <a href="https://www.credly.com/earner/earned/badge/c4298020-75ad-4ee3-b5f6-2c3644c8b90f" rel="noreferrer" target='_blank'><img id={styles.img5} src={it} alt="it" /></a>
        <a href="https://www.credly.com/earner/earned/badge/2e292ae6-3da2-4c12-8fc1-5c970dda21e6" rel="noreferrer" target='_blank'><img id={styles.img6} src={packet} alt="packet" /></a>
      </div>

      <hr />

      <h1>wordpress Projects</h1>

      <div className={styles.certificateimg}>
        <a href="https://trigol.com/" rel="noreferrer" target='_blank'><img id={styles.img4} src={homepage} alt="cyber" /></a>
        <a href="https://sba-brothers.com/motorsports" rel="noreferrer" target='_blank'><img id={styles.img5} src={motorbike} alt="it" /></a>
        <a href="https://trigol.com/himalayansalt/" rel="noreferrer" target='_blank'><img id={styles.img6} src={salt} alt="packet" /></a>
      </div>
    </div>
  )
}

export default Projects
