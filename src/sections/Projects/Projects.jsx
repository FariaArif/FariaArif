import styles from './ProjectsStyles.module.css';
import fitbit from '../../assets/fitbit.png';
import grubhub from '../../assets/grubhub.png';
import spotify from '../../assets/spotify.png';
import slack from '../../assets/slack.png';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fitbit}
          link="https://www.fitbit.com"
          h3="fitbit"
          p="FitnessApp"

        />
        <ProjectCard
          src={grubhub}
          link="https://www.grubhub.com"
          h3="grubhub"
          p="Food Delivery App"

        />
        <ProjectCard
          src={spotify}
          link="https://www.spotify.com"
          h3="spotify"
          p="Music App"

        />
        <ProjectCard
          src={slack}
          link="https://slack.com"
          h3="slack"
          p="Productivity App"
        />
      </div>
    </section>
  );
}

export default Projects;
