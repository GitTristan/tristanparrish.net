import Education from "../sections/content_sections/Education";
import Experience from "../sections/content_sections/Experience";

export default function Content({ selection }: { selection: string }) {
  return (
    <div className="flex items-center justify-center rounded-md md:my-20 md:mx-10">
      {selection === "Education" && (
        <Education
          titleClassName="font-bold text-4xl md:text-6xl mb-5"
          paragraphClassName="text-2xl"
        />
      )}
      {selection === "WorkExperience" && (
        <Experience
          titleClassName="font-bold text-4xl md:text-6xl mb-5"
          paragraphClassName="text-2xl"
        />
      )}
    </div>
  );
}
