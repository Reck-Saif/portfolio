import React from 'react'
import styles from './maincss.module.scss';
import { Link } from 'react-router-dom';
// import phone from '../../media/phone.png'

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Hi,</h1>
      <p>I'm Saif Said</p>
      <p>Software Developer</p>
      <button className={styles.button}><Link to='/projects'>My work</Link></button>
    </div>
  )
}

export default Main
