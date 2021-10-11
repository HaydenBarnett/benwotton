import styles from "./Project.module.css";
import { ConditionalLink } from "../";

type ProjectProps = {
  image: string;
  url?: string;
  name?: string;
  role?: string;
};

export const Project = ({ image, url, name, role }: ProjectProps) => {
  return (
    <ConditionalLink href={url} target="_blank">
      <div className={styles.project}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.image}
          src={image}
          width={168}
          height={256}
          alt=""
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
      </div>
    </ConditionalLink>
  );
};

export default Project;
