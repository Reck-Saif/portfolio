import React from 'react'
import styles from './maincss.module.scss';
import { Link } from 'react-router-dom';

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    
    <div className={styles.container}>
        <h1>Hi!</h1>
        <p>I'm Saif Said</p>
        <p>Software Developer</p>
        <a href="http://localhost:3000/projects"><button type="button">Learn more</button></a>
        
     </div>
  )
}

export default Main
