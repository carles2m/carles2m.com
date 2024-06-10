import Image from "next/image";
import React from "react";

import { HeaderProps } from "./Header";

type HeaderImageProps = Pick<HeaderProps, "profileName" | "profilePicture">;

export const HeaderImage = ({
  profilePicture,
  profileName,
}: HeaderImageProps) => {
  const popoverContent = (
    <Image
      className="invisible absolute top-[110%] m-auto min-w-[320px] rounded opacity-0 shadow-lg transition-all ease-linear peer-hover:visible peer-hover:opacity-100 peer-focus-visible:visible peer-focus-visible:opacity-100 motion-reduce:transition-none max-[512px]:-left-full"
      src={profilePicture}
      alt={profileName}
      width={320}
      height={320}
    />
  );

  return (
    <div className="relative flex justify-center md:justify-start 2xl:justify-center">
      <Image
        className="peer rounded-full"
        src={profilePicture}
        alt={profileName}
        priority
        width={48}
        height={48}
      />
      {popoverContent}
    </div>
  );
};
