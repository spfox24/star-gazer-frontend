import styles from './Footer.module.css';


function Footer () {
    return (
    <footer className={styles.footer}>
        <p className={styles.rights}>&copy; Star Gazer by Steven Fox All Rights Reserved {new Date().getFullYear()}</p>
    </footer>
    );
};

export default Footer;