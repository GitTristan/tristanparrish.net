interface PortfolioProps {
  titleClassName?: string;
  paragraphClassName?: string;
}

export default function Portfolio({
  titleClassName,
  paragraphClassName,
}: PortfolioProps) {
  return (
    <div>
      <h2 className={titleClassName}>Portfolio</h2>
      <p className={`${paragraphClassName} text-lg leading-relaxed mt-5`}>
        As a freelance web designer and developer, I create custom websites that
        are clean, modern, and built to perform. Through my business,{" "}
        <strong className="font-semibold">Parrish Design</strong>, I work
        directly with businesses and entrepreneurs to craft digital experiences
        that not only look great but also drive results.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Specialties</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Custom Website Design & Development</li>
        <li>UI/UX Design and Conversion Rate Optimization</li>
        <li>SEO and Performance Optimization</li>
        <li>Website Hosting and Maintenance</li>
      </ul>

      <p className={`${paragraphClassName} text-lg leading-relaxed mt-5`}>
        Every project I take on is centered around the goals of the business —
        whether that's improving engagement, boosting conversions, or building a
        strong, professional online presence. I believe that websites should be
        both visually compelling and strategically effective, combining design,
        user experience, and technical performance into one seamless package.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Recent Projects</h3>
      <ul className="list-disc list-inside space-y-4">
        <li>
          <strong className="font-semibold">Custom B2B Websites</strong> —
          Designed and developed complete websites for small businesses,
          focusing on clean layouts, intuitive navigation, and conversion-driven
          CTAs.
        </li>
        <li>
          <strong className="font-semibold">Website Redesigns</strong> —
          Modernized outdated websites to improve mobile responsiveness, page
          speed, and user experience, resulting in higher conversion rates and
          improved customer engagement.
        </li>
        <li>
          <strong className="font-semibold">Performance Optimization</strong> —
          Audited and enhanced existing websites to achieve faster load times,
          better SEO scores, and improved Core Web Vitals.
        </li>
        <li>
          <strong className="font-semibold">Hosting Solutions</strong> —
          Provided secure, managed hosting for client websites, ensuring optimal
          uptime, backup management, and performance monitoring.
        </li>
      </ul>

      <p className={`${paragraphClassName} text-lg leading-relaxed mt-5`}>
        I primarily build with{" "}
        <strong className="font-semibold text-neutral-300">
          HTML, CSS, JavaScript, TypeScript, React, TailwindCSS, Vite
        </strong>
        , and deploy through{" "}
        <strong className="font-semibold text-neutral-300">GitHub</strong> and{" "}
        <strong className="font-semibold text-neutral-300">Vercel</strong>,
        using best practices to ensure every site is scalable, secure, and easy
        to maintain.
      </p>

      <p className={`${paragraphClassName} text-lg leading-relaxed mt-5`}>
        If you're looking for a website that blends design, functionality, and
        performance — I'm here to help bring your vision to life.
      </p>
    </div>
  );
}
