import React from 'react'
import styles from './maincss.module.scss';
import { Link } from 'react-router-dom';
import phone from '../../media/phone.png'

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
        <h1>Hi!</h1>
        <p>I'm Saif Said</p>
        <p>Software Developer</p>
        <button><Link to='/projects'>My work</Link></button>
      </div>
      
      <div className={styles.imgContainer}>
        <img src={phone} alt="saifphoto" />
      </div>

    </div>
  )
}

export default Main
