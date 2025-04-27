interface AboutMeProps {
  titleClassName?: string;
  paragraphClassName?: string;
}

export default function AboutMe({
  titleClassName,
  paragraphClassName,
}: AboutMeProps) {
  return (
    <div>
      <h1 className={titleClassName}>About Me</h1>
      <p className={paragraphClassName}>
        My name is Tristan! I'm a freelance web designer and developer
        passionate about creating clean, high-performing websites that help
        businesses grow. I specialize in custom website development, UI/UX
        design, and website hosting solutions. My goal is to turn ideas into
        impactful digital experiences—whether it's crafting a brand-new site,
        revamping an outdated design, or optimizing for better performance and
        conversions.
        <br />
        <br />
        My journey into web design began long before I started freelancing. Over
        the years, I’ve immersed myself in modern web development, industry best
        practices, and user experience design, continually refining my skills to
        stay ahead of trends. Having built a variety of websites for businesses
        and entrepreneurs, I understand what makes a website both visually
        appealing and strategically effective. My approach prioritizes clean,
        user-friendly design and performance-driven results, ensuring that every
        site I create is optimized for engagement and conversions.
        <br />
        <br />
        Beyond web design, I also have a strong foundation in cybersecurity,
        currently pursuing a Bachelor’s in Cybersecurity at St. Petersburg
        College. My technical background allows me to build secure, optimized,
        and scalable websites, ensuring businesses stay protected while growing
        online.
        <br />
        <br />
        When I’m not building websites, I work as a Core Support Technician at
        KnowBe4, where I troubleshoot and support the platform. My experience in
        tech support and cybersecurity gives me a unique edge in designing
        websites that are not just visually appealing but also secure and
        efficient.
        <br />
        <br />
        I’m always looking to collaborate with businesses and entrepreneurs who
        need a strong online presence. Let’s connect and bring your digital
        vision to life!
      </p>
    </div>
  );
}
