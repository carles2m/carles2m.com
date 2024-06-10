import { useEffect, useState } from "react";

import { getYear } from "../lib/dateUtil";
import { Divider } from "./Divider";

type FooterProps = {
  profileName: string;
};

export const Footer: React.FC<FooterProps> = ({ profileName }) => {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(getYear());

    const interval = setInterval(() => {
      setYear(getYear());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="mt-auto w-full pt-12">
      <Divider />
      <div className="mx-auto h-full max-w-content p-4 px-content">
        <p>{`${year} ${profileName}`}</p>
      </div>
    </footer>
  );
};
