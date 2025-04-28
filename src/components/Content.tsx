import Education from "../sections/content_sections/Education";
import Experience from "../sections/content_sections/Experience";
import AboutMe from "../sections/content_sections/AboutMe";
import Certifications from "../sections/content_sections/Certifications";
import Welcome from "../sections/content_sections/Welcome";

const titleClassName = "font-bold text-3xl text-center md:text-5xl mb-5";

export default function Content({
  selection,
  isMobile,
}: {
  selection: string;
  isMobile: boolean;
}) {
  return (
    <div className="flex flex-col items-center rounded-md m-5 md:mx-5 md:px-5 md:my-10 md:py-5 max-h-fit overflow-auto">
      {isMobile ? (
        <>
          <div id="Home">
            <Welcome titleClassName={titleClassName} />
          </div>
          <div id="AboutMe">
            <AboutMe titleClassName={titleClassName} />
          </div>
          <div id="WorkExperience">
            <Experience titleClassName={titleClassName} />
          </div>
          <div id="Education">
            <Education titleClassName={titleClassName} />
          </div>
          <div id="Certifications">
            <Certifications titleClassName={titleClassName} />
          </div>
        </>
      ) : (
        <>
          {selection === "Home" && <Welcome titleClassName={titleClassName} />}
          {selection === "AboutMe" && (
            <AboutMe titleClassName={titleClassName} />
          )}
          {selection === "WorkExperience" && (
            <Experience titleClassName={titleClassName} />
          )}
          {selection === "Education" && (
            <Education titleClassName={titleClassName} />
          )}
          {selection === "Certifications" && (
            <Certifications titleClassName={titleClassName} />
          )}
        </>
      )}
    </div>
  );
}
