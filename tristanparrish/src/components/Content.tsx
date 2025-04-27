import Education from "../sections/content_sections/Education";
import Experience from "../sections/content_sections/Experience";
import AboutMe from "../sections/content_sections/AboutMe";
import Portfolio from "../sections/content_sections/Portfolio";
import Certifications from "../sections/content_sections/Certifications";

// Define shared class names
const titleClassName = "font-bold text-4xl md:text-6xl mb-5";

export default function Content({ selection }: { selection: string }) {
  return (
    <div className="flex flex-col items-center rounded-md m-5 md:m-20 max-h-fit overflow-auto">
      {selection === "Education" && (
        <Education titleClassName={titleClassName} />
      )}
      {selection === "WorkExperience" && (
        <Experience titleClassName={titleClassName} />
      )}
      {selection === "Home" && <AboutMe titleClassName={titleClassName} />}
      {selection === "Portfolio" && (
        <Portfolio titleClassName={titleClassName} />
      )}
      {selection === "Certifications" && (
        <Certifications titleClassName={titleClassName} />
      )}
    </div>
  );
}
