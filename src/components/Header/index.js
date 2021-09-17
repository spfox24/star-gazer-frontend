import styles from './Header.module.css';
import nasa from '../../assets/nasa.png';

function Header () {
    return (
    <header className={styles.header}>
        <div className={styles.logoContainer}>
            <a href="https://www.nasa.gov/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Nasa">
                <img className={styles.logo} src={nasa} alt="Nasa" />
            </a>
        </div>
        <h1 className={styles.title}>STAR GAZER</h1>
    </header>
    )
}

export default Header;