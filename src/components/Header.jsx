import React from 'react';
import styles from './Header.module.css'
import logo from '../assets/ignite-logo.svg'

const Header = () => {
    return (
       <header className={styles.header}>
            <img src={logo} alt="Logo ignite feed" />
            <h2>Ignite Feed</h2>
       </header>
    );
}

export default Header;
