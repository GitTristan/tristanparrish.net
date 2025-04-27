import Education from "../sections/content_sections/Education";
import Experience from "../sections/content_sections/Experience";

// Define shared class names
const titleClassName = "font-bold text-4xl md:text-6xl mb-5";
const paragraphClassName = "";

export default function Content({ selection }: { selection: string }) {
  return (
    <div className="flex flex-col items-center rounded-md md:my-20 md:mx-10">
      {selection === "Education" && (
        <Education
          titleClassName={titleClassName}
          paragraphClassName={paragraphClassName}
        />
      )}
      {selection === "WorkExperience" && (
        <Experience
          titleClassName={titleClassName}
          paragraphClassName={paragraphClassName}
        />
      )}
    </div>
  );
}
