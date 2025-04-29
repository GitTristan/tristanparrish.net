import { CompTIAIcon } from "../../assets/icons/myicons";
import TestOutLogo from "../../assets/icons/testout.webp";

interface CertificationsProps {
  titleClassName?: string;
}

export default function Certifications({
  titleClassName,
}: CertificationsProps) {
  return (
    <div className="py-10 xl:py-0 flex flex-col items-center justify-center w-full gap-5">
      <h1 className={titleClassName}>Certifications</h1>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col hover:bg-white/10 bg-white/5 duration-300 rounded-md p-5 gap-2 items-center">
          <CompTIAIcon className="h-8" />
          <h2 className="text-2xl font-bold">A+</h2>
          <div className="opacity-70 text-sm">
            <p>Issue Date — Oct 2023</p>
            <p>Expiration Date — Oct 2026</p>
            <p>ID: QLS9E2H62MQ117KB</p>
          </div>
        </div>
        <div className="flex flex-col hover:bg-white/10 bg-white/5 duration-300 rounded-md p-5 gap-2 items-center">
          <img src={TestOutLogo} alt="Test Out Logo" className="h-8" />
          <h2 className="text-2xl font-bold">Security Pro</h2>
          <div className="opacity-70 text-sm">
            <p>Issue Date — Feb 2023</p>
            <p>ID: 6-1C6-VV969X</p>
          </div>
        </div>
      </div>
    </div>
  );
}
