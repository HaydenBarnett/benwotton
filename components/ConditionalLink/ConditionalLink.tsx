import { ReactNode } from "react";
import Link from "next/link";

type ConditionalLinkProps = {
  href?: string;
  target?: string;
  children?: ReactNode;
};

export const ConditionalLink = ({
  href,
  target,
  children,
}: ConditionalLinkProps) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <a target={target}>{children}</a>
      </Link>
    );
  }
  return <>{children}</>;
};

export default ConditionalLink;
