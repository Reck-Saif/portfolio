import React, { useState }from 'react'
import styles from './navcss.module.scss';
import { Link } from 'react-router-dom';
import logo from '../media/saif.png'
import { GiHamburgerMenu } from 'react-icons/gi';


type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  const [burgermenuIsOpen, setBurgermenuIsOpen] = useState<boolean>(false);
  return (
    
    <div className={styles.container}>
       <Link to={"/"}>Homepage</Link>
       <Link to={"/projects"}>Projects</Link>
       <Link to={"/cv"}>Cv</Link>
       
       <div className={styles.burgerMenuButton} onClick={() => setBurgermenuIsOpen(!burgermenuIsOpen)}>
            <GiHamburgerMenu size={28} />
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