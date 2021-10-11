import styles from "./Projects.module.css";
import { Project } from "../";

type ProjectsProps = {
  projects: any;
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className={styles.projects}>
      {projects.map((project: any, i: number) => {
        const { image, url, name, role } = project;
        return (
          <Project key={i} image={image} url={url} name={name} role={role} />
        );
      })}
    </div>
  );
};

export default Projects;
