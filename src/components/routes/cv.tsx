import React from 'react'
import styles from '../routes/cv.module.scss';
import myself from '../../media/cvphoto.png';


type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>

      <div className={styles.cvimg}>
        <img src={myself} alt="saifphoto" />
      </div>

      <h1 id={styles.name} >Saif Said </h1>

      <h1 id={styles.skill} >my skills</h1>

      <div className={styles.bar}>
        <ul>
          <li className={styles.html}>HTML</li>
          <li className={styles.css}>CSS</li>
          <li className={styles.java}>JAVA</li>
          <li className={styles.javascript}>JAVASCRIPT</li>
        </ul>
      </div>


      <div className={styles.education}>

        <h1>education</h1>
        <p><span>2014-2018</span> Länsimäki school koivukylä koulu</p>
      </div>


    </div>
  )
}

export default Cv
