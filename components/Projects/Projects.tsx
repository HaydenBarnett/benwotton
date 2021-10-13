import styles from "./Projects.module.css";
import { Project } from "../";
import type { ProjectProps } from "../";

export type ProjectsProps = {
  projects: ProjectProps[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className={styles.projects}>
      {projects.map((project, i: number) => {
        const { image, url, name, role } = project;
        return (
          <Project key={i} image={image} url={url} name={name} role={role} />
        );
      })}
    </div>
  );
};

export default Projects;
