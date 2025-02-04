import React from "react";

import { SocialLink } from "../lib/content.types";
import { Link, LinkProps } from "./Link";

type ButtonOnlyProps = Omit<SocialLink, "href"> & {
  onClick: () => void;
};

export type HeaderButtonProps =
  | (SocialLink & Pick<LinkProps, "isExternal">)
  | ButtonOnlyProps;

export const HeaderButton: React.FC<HeaderButtonProps> = ({
  name,
  Icon,
  ...props
}) => {
  const buttonClassName =
    "group relative rounded-md bg-[unset] p-4 transition-colors ease-linear hover:bg-black/10 dark:hover:bg-white/15 motion-reduce:transition-none";

  const tooltip = (
    <span className="invisible absolute -right-[20%] top-[110%] m-auto whitespace-nowrap rounded-sm bg-gray-800 px-2 py-1 text-white opacity-0 shadow-lg transition-all ease-linear group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100 motion-reduce:transition-none dark:bg-gray-200 dark:text-black">
      {name}
    </span>
  );

  const content = (
    <>
      {Icon ? <Icon size="1.2em" /> : <div className="size-4"></div>}
      {tooltip}
    </>
  );

  if ("onClick" in props) {
    return (
      <button
        type="button"
        aria-label={name}
        className={buttonClassName}
        onClick={props.onClick}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      aria-label={name}
      className={buttonClassName}
      isExternal={props.isExternal}
      href={props.href}
    >
      {content}
    </Link>
  );
};
