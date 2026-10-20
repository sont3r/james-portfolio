export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2f0eb] text-[#111111]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <a href="#" className="text-lg font-semibold tracking-tight">
          JAMES .s. BEETSEH
        </a>

        <div className="flex gap-6 text-sm">
          <a href="#work" className="hover:opacity-50">
            WORK
          </a>
          <a href="#about" className="hover:opacity-50">
            ABOUT
          </a>
          <a href="#contact" className="hover:opacity-50">
            CONTACT
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-[85vh] flex-col justify-between px-6 pb-10 pt-20 md:px-12">
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.2em]">
            Computer Science · Data · Software · ML/AI
          </p>

          <h1 className="max-w-6xl text-[15vw] font-medium uppercase leading-[0.78] tracking-[-0.07em] md:text-[10vw]">
            James
            <br />
            Beetseh
          </h1>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-8 border-t border-black/30 pt-6 md:flex-row md:items-end">
          <p className="max-w-lg text-lg leading-relaxed">
  Exploring how data, software and emerging technologies can be used
  to solve real problems.
</p>

          <a
            href="#work"
            className="text-sm uppercase tracking-[0.15em] hover:opacity-50"
          >
            Selected Work ↓
          </a>
        </div>
      </section>
{/* Projects */}
<section id="work" className="px-6 py-24 md:px-12">
  <div className="mb-16 flex items-end justify-between">
    <div>
      <p className="mb-3 text-sm uppercase tracking-[0.2em]">
        Selected Work
      </p>

      <h2 className="text-5xl uppercase tracking-[-0.04em] md:text-7xl">
        Projects
      </h2>
    </div>

    <p className="hidden text-sm md:block">2024 — 2026</p>
  </div>

  <div className="border-t border-black">

    {/* Project 01 - Banking Dashboard */}
    <article className="grid gap-8 border-b border-black py-12 md:grid-cols-[70px_1.3fr_1fr]">
      <span className="text-sm">01</span>

      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-60">
          Internship Project
        </p>

        <h3 className="text-4xl uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
          Banking
          <br />
          Dashboard
        </h3>

        <div className="mt-10 aspect-[16/10] overflow-hidden bg-[#d8d5ce]">
          <div className="flex h-full items-center justify-center text-sm uppercase tracking-widest text-black/40">
            Project Screenshot
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-60">
            Summer Internship
          </p>

          <p className="max-w-md text-lg leading-relaxed">
            An interactive banking dashboard designed to provide users
            with a clear and accessible way to view and manage financial
            information.
          </p>

          <p className="mt-6 max-w-md leading-relaxed opacity-70">
            The project involved front-end development, data handling
            and designing a user-friendly interface, taking the system
            from initial planning through to a working application.
          </p>
        </div>

        <div className="mt-10">
          <p className="mb-6 text-sm uppercase leading-7 tracking-wider">
            Web Development · Data
            <br />
            UI / UX · Dashboard
          </p>

          <a
            href="#"
            className="inline-block border-b border-black pb-1 text-sm uppercase tracking-wider transition-opacity hover:opacity-50"
          >
            View Project ↗
          </a>
        </div>
      </div>
    </article>
{/* Project 02 - Collab Dev */}
<article className="grid gap-8 border-b border-black py-12 md:grid-cols-[70px_1.3fr_1fr]">
  <span className="text-sm">02</span>

  <div>
    <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-60">
      Collaborative University Project
    </p>

    <h3 className="text-4xl uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
      Collab
      <br />
      Dev
    </h3>

    <div className="mt-10 aspect-[16/10] overflow-hidden bg-[#d8d5ce]">
      <div className="flex h-full items-center justify-center text-sm uppercase tracking-widest text-black/40">
        Project Screenshot
      </div>
    </div>
  </div>

  <div className="flex flex-col justify-between">
    <div>
      <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-60">
        Front-End Developer · Team of 7
      </p>

      <p className="max-w-md text-lg leading-relaxed">
  A university Open Day web application built collaboratively by a
  seven-person development team during my second year of Computer Science.
</p>

<p className="mt-6 max-w-md leading-relaxed opacity-70">
  As the front-end developer, I focused on the user-facing experience,
  helping build interfaces for event schedules, course information,
  registration and other Open Day features while collaborating with the
  wider development team.
</p>
    </div>

    <div className="mt-10">
      <p className="mb-6 text-sm uppercase leading-7 tracking-wider">
        Front-End Development · UI
        <br />
        Team Collaboration · Web Development
      </p>

      <a
  href="https://son-sont3rs-projects.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block border-b border-black pb-1 text-sm uppercase tracking-wider transition-opacity hover:opacity-50"
>
  View Live Project ↗
</a>
    </div>
  </div>
</article>
    {/* Project 03 - Early Warning System */}
    <article className="grid gap-8 border-b border-black py-12 md:grid-cols-[70px_1.3fr_1fr]">
      <span className="text-sm">02</span>

      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-60">
          Final Year Project
        </p>

        <h3 className="text-4xl uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
          Early Warning
          <br />
          System
        </h3>

        <div className="mt-10 aspect-[16/10] bg-[#d8d5ce]">
          <div className="flex h-full items-center justify-center text-sm uppercase tracking-widest text-black/40">
            Project Screenshot
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <p className="max-w-md text-lg leading-relaxed">
          A machine-learning system that identifies students at risk of
          academic difficulty and optimises how limited intervention
          resources are allocated.
        </p>

        <div className="mt-10">
          <p className="mb-6 text-sm uppercase leading-7 tracking-wider">
            Python · Machine Learning
            <br />
            Optimisation · Streamlit
          </p>

          <a
            href="#"
            className="inline-block border-b border-black pb-1 text-sm uppercase tracking-wider transition-opacity hover:opacity-50"
          >
            View Project ↗
          </a>
        </div>
      </div>
    </article>

    {/* Project 04 - Pet Health Record API */}
    <article className="grid gap-8 border-b border-black py-12 md:grid-cols-[70px_1.3fr_1fr]">
      <span className="text-sm">03</span>

      <div>
        <h3 className="text-4xl uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
          Pet Health
          <br />
          Record API
        </h3>

        <div className="mt-10 aspect-[16/10] bg-[#d8d5ce]">
          <div className="flex h-full items-center justify-center text-sm uppercase tracking-widest text-black/40">
            Project Screenshot
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <p className="max-w-md text-lg leading-relaxed">
          REST API for managing pets, vaccinations, appointments and
          medical records using object-oriented software design.
        </p>

        <div className="mt-10">
          <p className="mb-6 text-sm uppercase leading-7 tracking-wider">
            Java · Spring Boot
            <br />
            MySQL · REST API
          </p>

          <a
            href="#"
            className="inline-block border-b border-black pb-1 text-sm uppercase tracking-wider transition-opacity hover:opacity-50"
          >
            View Project ↗
          </a>
        </div>
      </div>
    </article>

    {/* Project 05 - Machine Learning */}
    <article className="grid gap-8 border-b border-black py-12 md:grid-cols-[70px_1.3fr_1fr]">
      <span className="text-sm">04</span>

      <div>
        <h3 className="text-4xl uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
          Machine
          <br />
          Learning
        </h3>

        <div className="mt-10 aspect-[16/10] bg-[#d8d5ce]">
          <div className="flex h-full items-center justify-center text-sm uppercase tracking-widest text-black/40">
            Project Screenshot
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <p className="max-w-md text-lg leading-relaxed">
          Data science project exploring regression and classification
          models, model evaluation and predictive performance.
        </p>

        <div className="mt-10">
          <p className="mb-6 text-sm uppercase leading-7 tracking-wider">
            Python · Pandas
            <br />
            Scikit-learn · Data Analysis
          </p>

          <a
            href="#"
            className="inline-block border-b border-black pb-1 text-sm uppercase tracking-wider transition-opacity hover:opacity-50"
          >
            View Project ↗
          </a>
        </div>
      </div>
    </article>

    {/* Project 06 - Book Management System */}
    <article className="grid gap-8 border-b border-black py-12 md:grid-cols-[70px_1.3fr_1fr]">
      <span className="text-sm">05</span>

      <div>
        <h3 className="text-4xl uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
          Book Management
          <br />
          System
        </h3>

        <div className="mt-10 aspect-[16/10] bg-[#d8d5ce]">
          <div className="flex h-full items-center justify-center text-sm uppercase tracking-widest text-black/40">
            Project Screenshot
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <p className="max-w-md text-lg leading-relaxed">
          Full-stack web application for managing and searching book
          records with CRUD functionality and database integration.
        </p>

        <div className="mt-10">
          <p className="mb-6 text-sm uppercase leading-7 tracking-wider">
            PHP · MySQL
            <br />
            JavaScript · AJAX
          </p>

          <a
            href="#"
            className="inline-block border-b border-black pb-1 text-sm uppercase tracking-wider transition-opacity hover:opacity-50"
          >
            View Project ↗
          </a>
        </div>
      </div>
    </article>

  </div>
</section>
{/* About */}
<section
  id="about"
  className="bg-[#111111] px-6 py-24 text-[#f2f0eb] md:px-12 md:py-32"
>
  <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">

    {/* Section Label */}
    <div>
      <p className="text-sm uppercase tracking-[0.2em]">
        About Me
      </p>
    </div>

    {/* Main About Content */}
    <div>
      <h2 className="max-w-4xl text-4xl leading-[1.05] tracking-[-0.04em] md:text-6xl">
        I enjoy solving problems, working with data and building practical
        applications.
      </h2>

      <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-white/70">
        <p>
          I&apos;m a Computer Science student with interests across data
          analytics, data science, machine learning, AI and cloud
          technologies.
        </p>

        <p>
          I&apos;m still exploring where I want to specialise, and I see
          that as an opportunity to keep learning, experimenting and
          developing across different areas of technology.
        </p>

        <p>
          Through university projects and internship experience,
          I&apos;ve gained hands-on experience working with data,
          developing applications and applying technical concepts to
          real problems.
        </p>

        <p>
          As I approach graduation, I&apos;m looking for a graduate
          opportunity where I can contribute what I already know, learn
          from experienced professionals and continue developing my
          technical skills.
        </p>
      </div>
    </div>
  </div>

  {/* Interests / Skills */}
  <div className="mt-24 grid gap-12 border-t border-white/30 pt-10 md:grid-cols-2">

    <div>
      <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/50">
        Currently Exploring
      </p>

      <div className="flex max-w-xl flex-wrap gap-x-6 gap-y-3 text-lg uppercase">
        <span>Data Analytics</span>
        <span>Data Science</span>
        <span>Machine Learning</span>
        <span>AI</span>
        <span>Cloud</span>
      </div>
    </div>

    <div>
      <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/50">
        What I Bring
      </p>

      <div className="flex max-w-xl flex-wrap gap-x-6 gap-y-3 text-lg uppercase">
        <span>Problem Solving</span>
        <span>Technical Thinking</span>
        <span>Creativity</span>
        <span>Adaptability</span>
        <span>Curiosity</span>
      </div>
    </div>

  </div>
</section>
{/* Contact */}
<footer
  id="contact"
  className="bg-[#111111] px-6 pb-10 pt-24 text-[#f2f0eb] md:px-12 md:pt-32"
>
  <p className="mb-8 text-sm uppercase tracking-[0.2em] text-white/60">
    Get In Touch
  </p>

  <h2 className="max-w-6xl text-[15vw] uppercase leading-[0.78] tracking-[-0.07em] md:text-[9vw]">
    Let&apos;s
    <br />
    Connect.
  </h2>

  <p className="mt-12 max-w-xl text-lg leading-relaxed text-white/60">
    I&apos;m currently open to graduate opportunities and conversations
    around data, software, machine learning, AI and cloud.
  </p>

  <div className="mt-24 grid gap-10 border-t border-white/30 pt-8 md:grid-cols-2">

    {/* Direct Contact */}
    <div>
      <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/40">
        Contact
      </p>

      <div className="flex flex-col items-start gap-3">
        <a
          href="mailto:jamessonter001@gmail.com"
          className="text-lg transition-opacity hover:opacity-50"
        >
          jamessonter001@gmail.com ↗
        </a>

        <a
          href="tel:"
          className="text-lg transition-opacity hover:opacity-50"
        >
          
        </a>
      </div>
    </div>

    {/* Social Links */}
    <div>
      <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/40">
        Find Me
      </p>

      <div className="flex flex-col items-start gap-3">
        <a
          href="https://www.linkedin.com/in/james-beetseh-0525192b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg transition-opacity hover:opacity-50"
        >
          LinkedIn ↗
        </a>

        <a
          href="https://github.com/sont3r"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg transition-opacity hover:opacity-50"
        >
          GitHub ↗
        </a>
      </div>
    </div>

  </div>

  <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/20 pt-6 text-xs uppercase tracking-wider text-white/40 md:flex-row">
    <p>© 2026 James Sonter</p>

    <a
      href="#"
      className="transition-opacity hover:opacity-100"
    >
      Back to top ↑
    </a>
  </div>
</footer>
    </main>
  );
}