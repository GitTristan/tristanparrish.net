interface AboutMeProps {
  titleClassName?: string;
}

export default function AboutMe({ titleClassName }: AboutMeProps) {
  return (
    <div>
      <h1 className={titleClassName}>About Me</h1>
      <p>
        I've always been drawn to challenges and the satisfaction that comes
        from overcoming them. I enjoy the process of working through obstacles
        and getting to the other side. That same mindset is what keeps me
        motivated in this industry — there's always something new to figure out,
        and every challenge is an opportunity to learn and get better.
        <br /> <br />
        Right now, I’m studying cybersecurity at St. Petersburg College while
        continuing to build skills across development, infrastructure, and
        security. I started out building websites with WordPress, moved into
        custom development with HTML, CSS, and JavaScript, and later expanded
        into frameworks like React and Vite — always looking for better,
        cleaner, and more scalable ways to build.
        <br /> <br />
        Outside of my professional life, I spend a lot of time climbing, hiking,
        and exploring the outdoors. I’ve noticed that I’m drawn to the same
        things in those activities as I am in tech — exploring new areas,
        working through challenges, and figuring things out along the way. It’s
        a pattern that runs through a lot of what I enjoy: taking on something
        unknown, pushing through obstacles, and learning from the experience.
      </p>
    </div>
  );
}
