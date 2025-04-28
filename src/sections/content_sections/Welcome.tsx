import {
  ViteIcon,
  ReactIcon,
  TailwindIcon,
  TsIcon,
  VercelIcon,
  GitHubIcon,
} from "../../assets/icons/myicons";

interface WelcomeProps {
  titleClassName?: string;
}

export default function Welcome({ titleClassName }: WelcomeProps) {
  const stackIconClass = "h-10 w-10 xl:h-20 xl:w-20";
  const stackDivClass =
    " p-3 font-black text-sm xl:text-lg hover:scale-110 bg-neutral-900/60 hover:bg-neutral-900/90 rounded-md duration-300 border-neutral-700 border-1 hover:cursor-pointer flex flex-col items-center justify-center";

  return (
    <div className="py-10 xl:py-0 flex flex-col items-center justify-center w-full">
      <h1 className={titleClassName}>Welcome to My Portfolio!</h1>
      <div className="text-center w-full flex flex-col gap-3">
        <h2 className="md:text-2xl font-light uppercase">
          This site was created and deployed using
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vite.dev/"
            className={stackDivClass}
          >
            <ViteIcon className={stackIconClass} />
            Vite
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://react.dev/"
            className={stackDivClass}
          >
            <ReactIcon className={stackIconClass} />
            React
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.typescriptlang.org/"
            className={stackDivClass}
          >
            <TsIcon className={stackIconClass} />
            Typescript
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tailwindcss.com/"
            className={stackDivClass}
          >
            <TailwindIcon className={stackIconClass} />
            Tailwind
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/"
            className={`md:hidden ${stackDivClass}`}
          >
            <GitHubIcon className={stackIconClass} />
            GitHub
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vercel.com/"
            className={`md:hidden ${stackDivClass}`}
          >
            <VercelIcon className={stackIconClass} />
            Vercel
          </a>
        </div>
        <div className="md:grid grid-cols-2 gap-5 hidden">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/"
            className={`${stackDivClass} flex-row gap-3`}
          >
            <GitHubIcon className={stackIconClass} />
            <span className="text-2xl xl:text-4xl">GitHub</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vercel.com/"
            className={`${stackDivClass} flex-row gap-3`}
          >
            <VercelIcon className={stackIconClass} />
            <span className="text-2xl xl:text-4xl">Vercel</span>
          </a>
        </div>
        <div className="text-left">
          <p>
            I built this website from scratch using{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://react.dev/"
              className="hover:text-[#61dafb] hover:cursor-pointer font-black"
            >
              React
            </a>
            , a popular JavaScript library known for creating fast, dynamic, and
            interactive web applications. React allows pages to update instantly
            without needing a full reload, making the user experience much
            smoother and more responsive. If you're viewing this website on
            laptop or desktop, as you explore the different sections of this
            site including Home, About Me, Work Experience, Education, and
            Certifications,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://react.dev/"
              className="hover:text-[#61dafb] hover:cursor-pointer font-black"
            >
              React
            </a>{" "}
            handles each content update behind the scenes without ever
            refreshing the page. This approach brings a more fluid, app-like
            experience that feels faster and more modern compared to traditional
            static websites.
            <br />
            <br />
            The project also uses{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.typescriptlang.org/"
              className="hover:text-[#327ac7] hover:cursor-pointer font-black"
            >
              TypeScript
            </a>
            , which helps enforce type safety during development. By catching
            potential issues early, TypeScript makes the codebase easier to
            manage, improves reliability, and sets a strong foundation for long
            lasting scalability.
            <br />
            <br />
            Version control is handled through{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/"
              className="hover:text-[#2dba4e] hover:cursor-pointer font-black"
            >
              GitHub
            </a>
            , where every update is tracked, reviewed, and organized for better
            collaboration and accountability. Once changes are ready, they are
            deployed automatically through{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vercel.com/"
              className="hover:text-[#0070f3] hover:cursor-pointer font-black"
            >
              Vercel
            </a>
            , a platform built specifically for hosting modern web applications
            with speed, reliability, and continuous delivery built into the
            workflow.
            <br />
            <br />
            Together, these technologies create a website that is not only
            visually clean and responsive, but also stable, secure, and
            optimized for performance. This project is a reflection of the same
            professional approach I bring to every site I build.
          </p>
        </div>
      </div>
    </div>
  );
}
