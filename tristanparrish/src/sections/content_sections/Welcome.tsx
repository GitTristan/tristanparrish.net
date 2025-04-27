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
  const stackIconClass = "h-20 w-20";
  const stackDivClass =
    " p-3 font-black text-lg hover:scale-110 hover:bg-neutral-800 rounded-md duration-300 border-neutral-700 border-1 hover:cursor-pointer flex flex-col items-center justify-center mx-3";

  return (
    <div className="flex flex-col items-center justify-center w-full p-5">
      <h1 className={titleClassName}>Welcome to My Portfolio!</h1>
      <div className="text-center w-full flex flex-col gap-3">
        <h2 className="text-2xl font-light uppercase">
          This site was created and deployed using
        </h2>
        <div className="grid grid-cols-4">
          <div className={stackDivClass}>
            <ViteIcon className={stackIconClass} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vite.dev/"
            >
              Vite
            </a>
          </div>
          <div className={stackDivClass}>
            <ReactIcon className={stackIconClass} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://react.dev/"
            >
              React
            </a>
          </div>
          <div className={stackDivClass}>
            <TsIcon className={stackIconClass} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.typescriptlang.org/"
            >
              Typescript
            </a>
          </div>
          <div className={stackDivClass}>
            <TailwindIcon className={stackIconClass} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwindcss.com/"
            >
              Tailwind
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className={`${stackDivClass} flex-row gap-3`}>
            <GitHubIcon className={stackIconClass} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/"
              className="text-4xl"
            >
              GitHub
            </a>
          </div>
          <div className={`${stackDivClass} flex-row gap-3`}>
            <VercelIcon className={stackIconClass} />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vercel.com/"
              className="text-4xl"
            >
              Vercel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
