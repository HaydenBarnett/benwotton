import NextLink from "next/link";
import cx from "classnames";
import styles from "./Header.module.css";
import { Logo, Nav } from "../";
import type { LogoProps, NavProps } from "../";

type HeaderProps = {
  logo?: LogoProps;
  nav?: NavProps;
  fullscreen?: boolean;
};

export const Header = ({ logo, nav, fullscreen }: HeaderProps) => {
  const headerClassName = cx(styles.header, {
    [styles.fullscreen]: fullscreen,
  });
  return (
    <div className={headerClassName}>
      <div className={styles.inner}>
        <NextLink href="/" passHref>
          <a>
            <Logo {...logo} />
          </a>
        </NextLink>
      </div>
      <Nav {...nav} />
    </div>
  );
};

export default Header;
