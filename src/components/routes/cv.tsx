import React from 'react'
import styles from '../routes/cv.module.scss';
import cv from '../../media/workcv.png';

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      <img src={cv} alt="Work Cv" />
    </div>
  )
}

export default Cv
