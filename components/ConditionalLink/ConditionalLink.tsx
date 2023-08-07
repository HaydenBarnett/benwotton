import { ReactNode } from "react";
import Link from "next/link";

type ConditionalLinkProps = {
  href?: string;
  target?: string;
  className?: string;
  children?: ReactNode;
};

export const ConditionalLink = ({
  href,
  target,
  className,
  children,
}: ConditionalLinkProps) => {
  if (href) {
    return (
      <Link href={href} target={target} className={className}>
        {children}
      </Link>
    );
  }
  return <>{children}</>;
};

export default ConditionalLink;
