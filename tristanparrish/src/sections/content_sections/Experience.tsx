interface ExperienceProps {
  titleClassName?: string;
}

export default function Experience({ titleClassName }: ExperienceProps) {
  return (
    <div className="py-10 xl:py-0 flex flex-col items-center justify-center w-full gap-5">
      <h1 className={titleClassName}>Experience</h1>
      <div className="grid grid-cols-3 hover:bg-white/10 bg-white/5 duration-300 rounded-md p-5 gap-5">
        <p className="flex-none opacity-70">July 2024 — Present</p>
        <div className=" col-span-2">
          <h2>Core Support Technician • KnowBe4</h2>
          <p className="opacity-70 text-sm">
            Achieved top ticket solves for two consecutive months while earning
            over 150 positive customer satisfaction reviews. Built hands-on
            experience troubleshooting Google Workspace, Entra, Active
            Directory, mail server whitelisting, and email delivery issues.
            Continued refining communication and technical skills to better
            support users across multiple environments.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 hover:bg-white/10 bg-white/5 duration-300 rounded-md p-5 gap-5">
        <p className="flex-none opacity-70">Sep 2022 — Present</p>
        <div className=" col-span-2">
          <h2>Freelance Website Developer • Parrish Design</h2>
          <p className="opacity-70 text-sm">
            Organized and operated a B2B website design, development, and
            hosting business, collaborating with clients to turn design ideas
            into high-performing websites. Improved conversion rates and
            click-through rates through strategic redesigns and UX enhancements.
            Built hands-on experience across a wide range of technologies
            including HTML, CSS, JavaScript, TypeScript, React, TailwindCSS,
            Vite, GitHub, Vercel, and more.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 hover:bg-white/10 bg-white/5 duration-300 rounded-md p-5 gap-5">
        <p className="flex-none opacity-70">Apr 2023 — Jul 2024</p>
        <div className=" col-span-2">
          <h2>Social Media Manager & Staff • Central Rock Gym</h2>
          <p className="opacity-70 text-sm">
            Managed social media growth efforts for a climbing gym, increasing
            follower count by over 70% and boosting monthly reach from
            approximately 30,000 to over 80,000 accounts. Helped train new
            employees on internal processes and procedures to improve team
            performance. Achieved the highest total number of member sign-ups in
            2023 through a combination of outreach, engagement, and front desk
            operations.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 hover:bg-white/10 bg-white/5 duration-300 rounded-md p-5 gap-5">
        <p className="flex-none opacity-70">Feb 2021 — Jul 2024</p>
        <div className=" col-span-2">
          <h2>Smart Home Technician • Camandras</h2>
          <p className="opacity-70 text-sm">
            Installed smart home technology in short-term rental properties,
            configuring systems for tenant use and property management needs.
            Troubleshooted technical issues to maintain system reliability and
            created easy-to-follow guides to help tenants operate smart devices
            independently. Implemented custom if-then automations to streamline
            lighting, security, and environmental controls across different
            properties.
          </p>
        </div>
      </div>
    </div>
  );
}
