interface EducationProps {
  titleClassName?: string;
}

export default function Education({ titleClassName }: EducationProps) {
  return (
    <div className="py-10 xl:py-0 flex flex-col items-center justify-center w-full gap-5">
      <h1 className={titleClassName}>Education</h1>
      <div className="grid grid-cols-3 hover:bg-white/10 bg-white/5 duration-300 rounded-md p-5 gap-5">
        <p className="flex-none opacity-70">Jan 2021 — May 2025</p>
        <div className=" col-span-2">
          <h2>Bachelor's degree • Cybersecurity • St. Petersburg College</h2>
          <p className="opacity-70 text-sm">
            Pursuing a Bachelor's degree focused on cybersecurity, networking,
            and information systems security. Building technical expertise in
            areas such as risk management, ethical hacking, network defense, and
            cloud security while gaining hands-on experience with modern
            security tools and practices.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 hover:bg-white/10 bg-white/5 duration-300 rounded-md p-5 gap-5">
        <p className="flex-none opacity-70">Jan 2021 — July 2023</p>
        <div className=" col-span-2">
          <h2>Associate of Arts • Cybersecurity • St. Petersburg College</h2>
          <p className="opacity-70 text-sm">
            Completed foundational coursework in cybersecurity, computer
            science, and IT systems. Developed a strong base in security
            principles, networking fundamentals, and problem-solving strategies
            to support further technical specialization.
          </p>
        </div>
      </div>
    </div>
  );
}
