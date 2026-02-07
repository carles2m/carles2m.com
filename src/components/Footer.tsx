import { useEffect, useState } from "react";

import { getYear, minuteInMs } from "../lib/dateUtil";
import { Divider } from "./Divider";

type FooterProps = {
  profileName: string;
};

export const Footer: React.FC<FooterProps> = ({ profileName }) => {
  const [year, setYear] = useState<number>(getYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(getYear());
    }, minuteInMs);

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
