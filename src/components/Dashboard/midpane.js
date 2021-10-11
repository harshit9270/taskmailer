import Nav from 'react-bootstrap/Nav';
import styles from './midpane.module.css';
import { Link } from 'react-router-dom';

export default function MidPane() {
    return (
        <div className={styles.midpane}>
            <h2>All Tasks</h2>
        </div>
    );
}
