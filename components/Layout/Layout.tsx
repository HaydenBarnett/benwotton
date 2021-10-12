import { ReactNode } from "react";
import { useRouter } from "next/router";
import { Header, LogoProps, BackgroundProps, NavProps } from "@components";

type LayoutProps = {
  logo?: LogoProps;
  background?: BackgroundProps;
  nav?: NavProps;
  children?: ReactNode;
};

export const Layout = ({ logo, background, nav, children }: LayoutProps) => {
  const router = useRouter();
  const fullscreen = !router.query?.uid;
  return (
    <>
      <Header
        logo={logo}
        background={background}
        nav={nav}
        fullscreen={fullscreen}
      />
      {children}
    </>
  );
};
