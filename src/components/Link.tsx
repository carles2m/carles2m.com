import { AnchorHTMLAttributes } from "react";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  isExternal?: boolean;
};

export const Link = ({ children, isExternal, ...rest }: LinkProps) => {
  let rel: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
  let target: AnchorHTMLAttributes<HTMLAnchorElement>["target"];

  if (isExternal) {
    rel = "noopener noreferrer";
    target = "_blank";
  }

  return (
    <a rel={rel} target={target} {...rest}>
      {children}
    </a>
  );
};
