import styles from './header.module.css';
import { Button } from 'react-bootstrap';
import LoginModal, { TextTrigger , ButtonTrigger} from '../../inc/Login/login';

function Header() {
    return (
        <div className={styles.headerContainer}>
            <h2 className={styles.aboutHeading}>
                Add task here and we'll remind you
            </h2>
            <h4 className={styles.subHeading}>
                The <span style={{textDecoration : "underline yellow", fontWeight: "700"}}>Only App</span> You'll Ever Need To Remember Tasks.
            </h4>

            <Button variant="primary" size="lg" className={styles.getStartedBtn}>Get Started</Button>
            
            <p>  Already on Task2Do?  <TextTrigger/> </p>
        </div>
    )
}

export default Header;