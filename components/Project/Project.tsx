import { useState } from "react";
import Image from "next/image";
import cx from "classnames";
import { ConditionalLink } from "../";
import styles from "./Project.module.css";

export type ProjectProps = {
  image: string;
  url?: string;
  name?: string;
  role?: string;
  date?: string;
};

export const Project = ({ image, url, name, role }: ProjectProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageClassName = cx(styles.image, {
    [styles.isLoaded]: isLoaded,
  });
  const projectClassName = cx(styles.project, {
    [styles.link]: !!url,
  });
  return (
    <ConditionalLink href={url} target="_blank">
      <div className={projectClassName}>
        <Image
          className={imageClassName}
          src={image}
          width={168}
          height={256}
          alt=""
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.indexOf("data:image/gif;base64") < 0) {
              setIsLoaded(true);
            }
          }}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
      </div>
    </ConditionalLink>
  );
};

export default Project;
