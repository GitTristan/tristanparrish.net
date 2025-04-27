import {
  ViteIcon,
  ReactIcon,
  TailwindIcon,
  TsIcon,
} from "../../assets/icons/myicons";

interface WelcomeProps {
  titleClassName?: string;
}

export default function Welcome({ titleClassName }: WelcomeProps) {
  const stackIconClass = "h-20 w-20";
  const stackDivClass =
    " p-3 font-black text-lg hover:scale-110 hover:bg-neutral-800 rounded-md duration-300 border-neutral-700 border-1 hover:cursor-pointer flex flex-col gap-2";

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className={titleClassName}>Welcome to My Portfolio!</h1>
      <div className="rounded-md p-4 border-neutral-700 border-1 w-full text-center">
        <h2 className="text-2xl uppercase font-light">
          This site was created using
        </h2>
        <div className="grid grid-cols-4 place-items-center mt-3">
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
      </div>
    </div>
  );
}
