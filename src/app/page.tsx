"use client";

import { useEffect, useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectsSection } from "../components/ProjectsSection";
import {
  personalProjects,
  professionalProjects,
  profileDescription,
  profileName,
  profilePicture,
  socialLinks,
} from "../lib/content";
import { getWeekDay, minuteInMs } from "../lib/dateUtil";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the browser,
  // which means that 'mounted' will only become true on the browser
  // and will always be false during server-side rendering
  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  return (
    <>
      {mounted ? (
        <HomeContent />
      ) : (
        <noscript>
          <HomeContent />
        </noscript>
      )}
    </>
  );
}

const HomeContent = ({}) => {
  const [day, setDay] = useState<string>(getWeekDay());

  useEffect(() => {
    const interval = setInterval(() => {
      setDay(getWeekDay());
    }, minuteInMs);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen min-w-content flex-col items-center justify-start bg-gray-50 text-black dark:bg-gray-900 dark:text-white">
      <Header
        profileName={profileName}
        profilePicture={profilePicture}
        links={socialLinks}
      />

      <main className="flex w-full max-w-content flex-col gap-8 px-content pt-4">
        <h1 className="overflow-hidden pt-8 text-4xl font-bold md:text-5xl">
          <div className="max-w-fit animate-appear whitespace-nowrap leading-normal motion-reduce:animate-none">
            <span>{day && `Happy ${day}!`}&nbsp;</span>
          </div>

          <div className="max-w-max bg-linear-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
            I&apos;m {profileName}
          </div>
        </h1>

        <p className="text-2xl">{profileDescription}</p>

        <ProjectsSection
          id="experience"
          index={0}
          title="Experience"
          projects={professionalProjects}
        />

        <ProjectsSection
          id="projects"
          index={1}
          title="Personal Projects"
          projects={personalProjects}
        />
      </main>

      <Footer profileName={profileName} />
    </div>
  );
};
