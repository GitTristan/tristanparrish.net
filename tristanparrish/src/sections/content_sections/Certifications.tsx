interface CertificationsProps {
  titleClassName?: string;
}

export default function Certifications({
  titleClassName,
}: CertificationsProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-5">
      <h1 className={titleClassName}>Certifications</h1>
      <div className="grid grid-cols-3 hover:bg-white/10 bg-white/5 duration-300 rounded-md p-5 gap-5">
        <div className="opacity-70">
          <p>Issue Date — Oct 2023</p>
          <p>Expiration Date — Oct 2026</p>
        </div>
        <div className="col-span-2">
          <h2>CompTIA A+</h2>
          <p className="opacity-70 text-sm">
            Pursuing a Bachelor's degree focused on cybersecurity, networking,
            and information systems security. Building technical expertise in
            areas such as risk management, ethical hacking, network defense, and
            cloud security while gaining hands-on experience with modern
            security tools and practices.
          </p>
          <p>ID: QLS9E2H62MQ117KB</p>
        </div>
      </div>
      <div className="grid grid-cols-3 hover:bg-white/10 bg-white/5 duration-300 rounded-md p-5 gap-5">
        <div className="opacity-70">
          <p>Issue Date — Feb 2023</p>
        </div>
        <div className="col-span-2">
          <h2>TestOut Security Pro</h2>
          <p className="opacity-70 text-sm">
            Pursuing a Bachelor's degree focused on cybersecurity, networking,
            and information systems security. Building technical expertise in
            areas such as risk management, ethical hacking, network defense, and
            cloud security while gaining hands-on experience with modern
            security tools and practices.
          </p>
        </div>
      </div>
    </div>
  );
}
