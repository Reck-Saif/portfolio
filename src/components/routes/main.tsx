import React from 'react'
import styles from './maincss.module.scss';
import { Link } from 'react-router-dom';

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hi</h1>
      <p>I'm Saif Said</p>
      <p>Software Developer</p>
      <button className={styles.btn}>
        <Link to='/projects'>
           My work
        </Link>
      </button>
    </div>
  )
}

export default Main
