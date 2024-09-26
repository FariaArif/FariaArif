import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Faria Arif. <br />
        Unauthorized use prohibited.
      </p>
    </section>
  );
}

export default Footer;
