import NextLink from "next/link";
import cx from "classnames";
import styles from "./Header.module.css";
import { Nav, Logo } from "../";
import { LogoProps } from "../Logo/Logo";
import { NavProps } from "../Nav/Nav";

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
