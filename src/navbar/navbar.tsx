import React, { useState }from 'react'
import styles from './navcss.module.scss';
import { Link } from 'react-router-dom';
import logo from '../media/saif.png'
import { FaHamburger } from 'react-icons/fa';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  const [burgermenuIsOpen, setBurgermenuIsOpen] = useState<boolean>(false);
  return (
    
    <div className={styles.container}>
      <div className={styles.desktopLinks}>
        <Link to={"/"}>Homepage</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/cv"}>Cv</Link>
      </div>
       
       <div className={styles.burgerMenuButton} onClick={() => setBurgermenuIsOpen(!burgermenuIsOpen)}>
            <FaHamburger size={28} color="#4FBDBA"/>
        </div>
        {
              burgermenuIsOpen
                ? (
                <div className={styles.brgrMenuItems}>
                  <Link to={"/"}>Homepage</Link>
                  <Link to={"/projects"}>Projects</Link>
                  <Link to={"/cv"}>Cv</Link>
                </div>
                )
              : null
            }
        
       <div className={styles.logo}>
        <img src={logo} alt="logo" />
       </div>
    </div>
  )
}

export default Navbar
