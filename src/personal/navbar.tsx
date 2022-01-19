import React from 'react'
import styles from './navcss.module.scss';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}
    >
      Navbar 
    </div>
  )
}

export default Navbar
