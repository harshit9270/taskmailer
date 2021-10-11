import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import styles from './sidebar.module.css';
import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className={styles.sidebar}>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Link to="/" className={styles.navText}>TaskMailer</Link>

                <Link to="/home" className={styles.navItem}>Home</Link>
                <Link to="/about" className={styles.navItem}>About</Link>
                <Link to="/explore" className={styles.navItem}>Explore</Link>
            </Nav>
        </div>
    );
}
