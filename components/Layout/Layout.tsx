import { ReactNode } from "react";
import { useRouter } from "next/router";
import { Header, LogoProps, NavProps } from "@components";

type LayoutProps = {
  logo?: LogoProps;
  nav?: NavProps;
  children?: ReactNode;
};

export const Layout = ({ logo, nav, children }: LayoutProps) => {
  const router = useRouter();
  const fullscreen = !router.query?.uid;
  return (
    <>
      <Header logo={logo} nav={nav} fullscreen={fullscreen} />
      {children}
    </>
  );
};
