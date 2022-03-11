import React from 'react'
import styles from '../routes/cv.module.scss';
import myself from '../../media/cvphoto.png';
import wordpress from '../../media/Wordpress.png';
import shopify from '../../media/shopify.png';
import woo from '../../media/woo.png';
import html from '../../media/html.png';
import css from '../../media/css.png';
import java from '../../media/java.png';
import js from '../../media/js.png';
import sql from '../../media/sql.png';
import react from '../../media/react.png';



type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.cvpage}>
      <div className={styles.container}>

<div className={styles.cvimg}>
  <img src={myself} alt="saifphoto" />
</div>

<h3> Name:Saif Said <br></br> my age:17 </h3>

<hr />

<div className={styles.education}>
  <h1>Education</h1>
  <p><span>What i am styding right now?</span><br></br> At the time i am student in Varia ammattikoulu</p>
  <p><span>Do i have job expirience?</span><br></br> Yes, i have done couple jobs. I have sell news and the second in my dads company</p>
</div>

<h1 id={styles.best} >better in this</h1>

<div className={styles.bar}>
  <ul>
    <li className={styles.html}>HTML</li>
    <li className={styles.css}>CSS</li>
    <li className={styles.react}>react</li>
    <li className={styles.wordpress}>wordpress</li>
  </ul>
</div>


  <h1 id={styles.other}>other skills</h1>

  <div className={styles.skills_img}>
    <img id={styles.word} src={wordpress} alt="wordpress" />  
    <img id={styles.shopify} src={shopify} alt="shopify" />  
    <img id={styles.woo} src={woo} alt="woo" />  
    <img id={styles.html} src={html} alt="html" />  
    <img id={styles.css} src={css} alt="css" />  
    <img id={styles.java} src={java} alt="java" />  
    <img id={styles.js} src={js} alt="js" />  
    <img id={styles.sql} src={sql} alt="sql" />  
    <img id={styles.react} src={react} alt="react" />  
  </div>

  <div className={styles.lang}>
    <h1>language Skills</h1>
  </div>

  <div className={styles.lang_skills}>
    <p>Finnish </p>
    <p>English</p>
    <p>Urdu</p>
  </div>

</div>
    
    </div>

  )
}

export default Cv
