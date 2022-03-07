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
      <h1 id={styles.skill} >programming skills</h1>

      <div className={styles.bar}>
        <ul>
          <li className={styles.html}>HTML</li>
          <li className={styles.css}>CSS</li>
          <li className={styles.react}>react</li>
          <li className={styles.javascript}>JAVASCRIPT</li>
        </ul>
      </div>

      <div className={styles.education}>
        <h1>Education</h1>
        <p><span>What i am styding right now?</span><br></br> At the time i am student in Varia ammattikoulu</p>
      </div>

        <h1>other skills</h1>
        
        <div className={styles.skills}>
        <ul>
          <li className={styles.shopify}>Shopify</li>
          <li className={styles.marketing}>Digital marketing</li>
          <li className={styles.wordpress}>wordpress</li>
          <li className={styles.web}>web development</li>
        </ul>
      </div>

    </div>
  )
}

export default Cv
