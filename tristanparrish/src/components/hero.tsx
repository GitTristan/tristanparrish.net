import {
  HomeIcon,
  CodeBracketSquareIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import { LinkedInIcon, GitHubIcon } from "../assets/icons/myicons";

export default function Hero() {
  const links = [
    { label: "Home", href: "#", icon: HomeIcon },
    { label: "Portfolio", href: "#", icon: CodeBracketSquareIcon },
    { label: "Work Experience", href: "#", icon: BriefcaseIcon },
    { label: "Education", href: "#", icon: AcademicCapIcon },
    { label: "Certifications", href: "#", icon: CheckBadgeIcon },
  ];

  const linkClasses =
    "flex items-center gap-2 hover:scale-110 hover:bg-neutral-800 rounded-md p-3 duration-300 border-neutral-700 border-1";

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
    "flex flex-col items-center gap-2 hover:scale-110 hover:bg-neutral-800 rounded-md p-4 duration-300 border-neutral-700 border-1";

  return (
    <div className="flex flex-col text-center gap-4">
      <div>
        <h1 className="text-4xl md:text-6xl font-black">Tristan Parrish</h1>
        <h2 className="text-2xl md:text-3xl font-light">
          Developer & Cybersecurity Student
        </h2>
      </div>
      <div className="flex justify-around gap-1">
        <div className="flex justify-between flex-col gap-3">
          {links.map((link) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              key={link.label}
              href={link.href}
              className={linkClasses}
            >
              {link.icon ? <link.icon className="h-5 w-5" /> : null}
              {link.label}
            </a>
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
