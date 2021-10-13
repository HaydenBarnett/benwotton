import styles from "./Projects.module.css";
import { Project } from "../";
import type { ProjectProps } from "../";

export type ProjectsProps = {
  projects: ProjectProps[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.date && b.date) return a.date < b.date ? 1 : -1;
    if (a.date && !b.date) return -1;
    if (!a.date && b.date) return 1;
    return 0;
  });

  return (
    <div className={styles.projects}>
      {sortedProjects.map((project, i: number) => {
        const { image, url, name, role } = project;
        return (
          <Project key={i} image={image} url={url} name={name} role={role} />
        );
      })}
    </div>
  );
};

export default Projects;
