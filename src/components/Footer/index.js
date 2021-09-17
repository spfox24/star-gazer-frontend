import styles from './Footer.module.css'

function Footer () {
    return (
    <footer className={styles.footer}>
        <p>&copy; Star Gazer All Rights Reserved {new Date().getFullYear()}</p>
    </footer>
    );
};

export default Footer;