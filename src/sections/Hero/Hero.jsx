import styles from './HeroStyles.module.css';
import heroImg from '../../assets/myImage.jpeg';
// import sun from '../../assets/sun.svg';
// import moon from '../../assets/moon.svg';
// import twitterLight from '../../assets/twitter-light.svg';
// import twitterDark from '../../assets/twitter-dark.svg';
// import githubLight from '../../assets/github-light.svg';
// import githubDark from '../../assets/github-dark.svg';
// import linkedinLight from '../../assets/linkedin-light.svg';
// import linkedinDark from '../../assets/linkedin-dark.svg';

import openEye from '../../assets/openEye.svg';
import closeEye from '../../assets/closeEye.svg';
import phoneLight from '../../assets/phone-light.svg';
import phoneDark from '../../assets/phone-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';

import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? openEye : closeEye;
  const phoneIcon = theme === 'light' ? phoneLight : phoneDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Noor Ul Hassan"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Faria
          <br />
          Arif
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a href="tel:+1234567890" target="_blank">
            <img src={phoneIcon} alt="phone icon" />
          </a>
          <a href=" https://www.instagram.com" target="_blank">
            <img src={instagramIcon} alt="instagram icon" />
          </a>
          <a href="  https://www.snapchat.com" target="_blank">
            <img src={githubIcon} alt="snapchat icon" />
          </a>
        </span>
        <p className={styles.description}>
        You don’t have to be a genius; you just have to be one thing: a problem solver.
        </p>
        <a href={CV} download>
          <button className="hover">My CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
