import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";
import styles from "./Nav.module.css";
import Image from "next/image";

type NavItemProps = {
  title: string;
  url: string;
};

export type NavProps = {
  items?: NavItemProps[];
  resume?: string;
  email?: string;
  fullscreen?: boolean;
};

export const Nav = ({ items, resume, email, fullscreen }: NavProps) => {
  const router = useRouter();
  const navClassName = cx(styles.nav, {
    [styles.fullscreen]: fullscreen,
  });
  return (
    <div className={navClassName}>
      {items &&
        items.map((item, i) => {
          const isActive = `/${router.query?.uid}` === item.url;
          const linkClassName = cx(styles.link, {
            [styles.isActive]: isActive,
          });
          return (
            <div key={i} className={linkClassName}>
              <Link href={item.url}>{item.title}</Link>
            </div>
          );
        })}
      {resume && (
        <div className={styles.link}>
          <Link href={resume} target="_blank" rel="noopener noreferrer">
            <Image
              className={styles.image}
              src="/icon-resume.svg"
              width={16}
              height={16}
              alt=""
            />
            Resume
          </Link>
        </div>
      )}
      {email && (
        <div className={styles.link}>
          <Link href={email}>
            <Image
              className={styles.image}
              src="/icon-email.svg"
              width={16}
              height={16}
              alt=""
            />
            Email
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
