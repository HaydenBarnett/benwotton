import NextLink from "next/link";
import styles from "./Nav.module.css";

type NavItemProps = {
  title: string;
  url: string;
};

export type NavProps = {
  items?: NavItemProps[];
  resume?: string;
  email?: string;
};

export const Nav = ({ items, resume, email }: NavProps) => {
  return (
    <div className={styles.nav}>
      {items &&
        items.map((item, i) => {
          return (
            <div key={i} className={styles.link}>
              <NextLink href={item.url} passHref>
                <a>{item.title}</a>
              </NextLink>
            </div>
          );
        })}
      {resume && (
        <div className={styles.link}>
          <NextLink href={resume} passHref>
            <a target="_blank">Resume</a>
          </NextLink>
        </div>
      )}
      {email && (
        <div className={styles.link}>
          <NextLink href={email} passHref>
            <a>Email</a>
          </NextLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
