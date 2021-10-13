import NextLink from "next/link";
import cx from "classnames";
import styles from "./Header.module.css";
import { Logo, Nav } from "../";
import type { LogoProps, NavProps } from "../";

export type BackgroundProps = {
  poster?: string;
  video?: string;
};

export type HeaderProps = {
  logo?: LogoProps;
  nav?: NavProps;
  background?: BackgroundProps;
  fullscreen?: boolean;
};

export const Header = ({ logo, background, nav, fullscreen }: HeaderProps) => {
  const headerClassName = cx(styles.header, {
    [styles.fullscreen]: fullscreen,
  });
  const logoHref = fullscreen && nav && nav.items ? nav?.items[0]?.url : "/";
  return (
    <div className={headerClassName}>
      <NextLink href={logoHref} passHref>
        <a className={styles.link}>
          <div className={styles.inner}>
            <Logo {...logo} />
          </div>
        </a>
      </NextLink>
      <Nav {...nav} fullscreen={fullscreen} />
      {background?.poster && background?.video && (
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          poster={background.poster}
        >
          <source src={background.video} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Header;
