import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import { LinkedInIcon, GitHubIcon } from "../assets/icons/myicons";

export default function Hero({
  selection,
  setSelection,
}: {
  selection: string;
  setSelection: (value: string) => void;
}) {
  const links = [
    { label: "Home", value: "Home", icon: HomeIcon },
    { label: "About Me", value: "AboutMe", icon: UserIcon },
    { label: "Work Experience", value: "WorkExperience", icon: BriefcaseIcon },
    { label: "Education", value: "Education", icon: AcademicCapIcon },
    { label: "Certifications", value: "Certifications", icon: CheckBadgeIcon },
  ];

  const linkClasses = (isActive: boolean) =>
    `flex items-center gap-2 rounded-md p-3 duration-300 border-neutral-700 border-1 cursor-pointer ${
      isActive
        ? "bg-neutral-900/90 scale-110"
        : "hover:scale-110 bg-neutral-900/60 hover:bg-neutral-900/90"
    }`;

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tristan-parrish/",
      icon: LinkedInIcon,
    },
    {
      label: "GitHub",
      href: "https://github.com/GitTristan",
      icon: GitHubIcon,
    },
    {
      label: "Send Me an Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=tristan@parrishdesign.com",
      icon: InboxIcon,
    },
  ];

  const socialClasses =
    "flex flex-col items-center gap-2 hover:scale-110 bg-neutral-900/60 hover:bg-neutral-900/90 rounded-md p-4 duration-300 border-neutral-700 border-1";

  return (
    <div className="flex items-center justify-center flex-col text-center gap-4">
      <div>
        <h1 className="text-4xl md:text-6xl font-black">Tristan Parrish</h1>
        <h2 className="text-2xl md:text-3xl font-light">
          Developer & Cybersecurity Student
        </h2>
      </div>
      <div className="flex gap-7">
        <div className="flex justify-between flex-col gap-3">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => setSelection(link.value)}
              className={linkClasses(selection === link.value)}
            >
              {link.icon ? <link.icon className="h-5 w-5" /> : null}
              {link.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {socials.map((social) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              key={social.label}
              href={social.href}
              className={socialClasses}
            >
              {social.icon ? <social.icon className="h-10 w-10" /> : null}
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
