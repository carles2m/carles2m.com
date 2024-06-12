import { useTheme } from "next-themes";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

import { SocialLink } from "../lib/content.types";
import { HeaderButton } from "./Header.Button";
import { HeaderImage, HeaderImageProps } from "./Header.Image";

export type HeaderProps = HeaderImageProps & {
  links: { [key: string]: SocialLink };
};

export const Header: React.FC<HeaderProps> = ({
  profileName,
  profilePicture,
  links,
}) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 w-full shadow-2xl backdrop-blur-[20px] backdrop-contrast-[90%] backdrop-saturate-[180%]">
      <div className="mx-auto max-w-content px-content">
        <div className="mt-[env(titlebar-area-height,0)] flex h-16 items-center justify-between">
          <div className="md:hidden" />

          <HeaderImage
            profileName={profileName}
            profilePicture={profilePicture}
          />

          <div className="flex flex-row gap-4">
            {Object.values(links).map((link) => (
              <HeaderButton key={link.name} {...link} isExternal />
            ))}

            <HeaderButton
              name="Toggle color mode"
              Icon={resolvedTheme == "dark" ? BsSun : BsMoon}
              onClick={() =>
                setTheme(resolvedTheme == "dark" ? "light" : "dark")
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};
