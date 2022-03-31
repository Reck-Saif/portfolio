import React, { useState }from 'react'
import styles from './navcss.module.scss';
import { Link } from 'react-router-dom';
import logo from '../media/saif.png'
import { FaHamburger } from 'react-icons/fa';
import { VscChromeClose } from 'react-icons/vsc';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  const [burgermenuIsOpen, setBurgermenuIsOpen] = useState<boolean>(false);
  
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setBurgermenuIsOpen(false);
  }

  return (
    
    <div className={styles.container}>
      <div className={styles.desktopLinks}>
        <Link to={"/"}>Homepage</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/cv"}>Cv</Link>
      </div>
       
       <div className={styles.burgerMenuButton} onClick={() => setBurgermenuIsOpen(!burgermenuIsOpen)}>
          {
            burgermenuIsOpen
            ? <VscChromeClose style={{ color: "#FFEFEF", fontSize: 28,}} />
            : <FaHamburger style={{ color: "#FFEFEF", fontSize: 28, }} />
          }
        </div>
        {
          burgermenuIsOpen
            ? (
            <div className={styles.brgrMenuItems}>
              <Link to={"/"}onClick={(e) => handleClick(e)}>Homepage</Link>
              <Link to={"/projects"} onClick={(e) => handleClick(e)}>Projects</Link>
              <Link to={"/cv"} onClick={(e) => handleClick(e)}>Cv</Link>
            </div>
              )
            : null
            }
        
       <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
       </div>
    </div>
  )
}

export default Navbar
