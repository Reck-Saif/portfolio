import React from 'react'
import styles from './navcss.module.scss';
import { Link } from 'react-router-dom';
import logo from '../media/saif.png'
import facebook from '../media/facebook.png'
import instagram from '../media/instagram.png'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    
    <div className={styles.container}>
       <Link to={"/"}>Homepage</Link>
       <Link to={"/projects"}>Projects</Link>
       <Link to={"/cv"}>Cv</Link>
       
       <div className={styles.logo}>
        <img src={logo} alt="logo" />
       </div>

       <div className={styles.media}>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
       </div>
    </div>
  )
}

export default Navbar
