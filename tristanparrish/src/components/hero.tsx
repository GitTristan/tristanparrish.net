import {
  HomeIcon,
  CodeBracketSquareIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

export default function Hero() {
  const links = [
    { label: "Home", href: "#", icon: HomeIcon },
    { label: "Portfolio", href: "#", icon: CodeBracketSquareIcon },
    { label: "Work Experience", href: "#", icon: BriefcaseIcon },
    { label: "Education", href: "#", icon: AcademicCapIcon },
    { label: "Certifications", href: "#", icon: CheckBadgeIcon },
  ];

  const linkClasses =
    "flex items-center gap-2 hover:scale-110 hover:bg-neutral-800 rounded-md p-2 duration-300 border-neutral-800 border-1";

  return (
    <div className="grid gap-3">
      {links.map((link) => (
        <a key={link.label} href={link.href} className={linkClasses}>
          {link.icon ? <link.icon className="h-5 w-5" /> : null}
          {link.label}
        </a>
      ))}
    </div>
  );
}
