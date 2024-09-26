import styles from './SkillsStyles.module.css';
// import checkMarkIconDark from '../../assets/checkmark-dark.svg';
// import checkMarkIconLight from '../../assets/checkmark-light.svg';

import starIconDark from '../../assets/star-dark.svg';
import starIconLight from '../../assets/star-light.svg';

import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const starIcon = theme === 'light' ? starIconLight : starIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={starIcon} skill="HTML" />
        <SkillList src={starIcon} skill="CSS" />
        <SkillList src={starIcon} skill="JavaScript" />
        <SkillList src={starIcon} skill="TypeScript" />
        <SkillList src={starIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={starIcon} skill="React" />
        <SkillList src={starIcon} skill="Angular" />
        <SkillList src={starIcon} skill="Vue" />
        <SkillList src={starIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={starIcon} skill="Redux" />
        <SkillList src={starIcon} skill="Webpack" />
        <SkillList src={starIcon} skill="Git" />
        <SkillList src={starIcon} skill="Jest" />
        <SkillList src={starIcon} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
