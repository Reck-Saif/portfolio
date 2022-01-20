import React from 'react'
import styles from './navcss.module.scss';
import { Link } from 'react-router-dom';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    
    <div className={styles.container}>
       <Link to={"/"}>Homepage</Link>
       <Link to={"/projects"}>Projects</Link>
       <Link to={"/cv"}>Cv</Link>

        {/* <a href="#home" id="home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#cv">Cv</a> */}
    </div>
  )
}

export default Navbar
