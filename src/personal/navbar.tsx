import React from 'react'
import styles from './navcss.module.scss';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    
    <div className={styles.container}>
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#cv">Cv</a>
    </div>
  )
}

export default Navbar
