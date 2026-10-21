import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#081525] text-[#F4F7FB]">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-6 md:px-12">
        <a href="#" className="text-lg font-semibold tracking-tight">
          JAMES .s. BEETSEH
        </a>

        <div className="flex gap-6 text-sm">
          <a
            href="#work"
            className="transition-colors hover:text-[#5B9CFF]"
          >
            WORK
          </a>
          <a
            href="#about"
            className="transition-colors hover:text-[#5B9CFF]"
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-[#5B9CFF]"
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-[85vh] flex-col justify-between px-6 pb-10 pt-20 md:px-12">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#78AFFF]">
            Computer Science · Data · Software · ML/AI
          </p>

          <h1 className="mt-5 text-[18vw] font-medium uppercase leading-[0.76] tracking-[-0.075em] md:text-[11vw]">
            James
            <br />
            <span className="text-[#5B9CFF]">Beetseh</span>
          </h1>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-8 border-t border-white/15 pt-6 md:flex-row md:items-end">
          <p className="max-w-lg text-lg leading-relaxed text-[#AEBFD3]">
            Exploring how data, software and emerging technologies can be used
            to solve real problems.
          </p>

          <a
            href="#work"
            className="text-sm uppercase tracking-[0.15em] text-[#78AFFF] transition-colors hover:text-white"
          >
            Selected Work ↓
          </a>
        </div>
      </section>

      {/* Projects */}
      <section
        id="work"
        className="bg-[#0C1C30] px-6 py-24 md:px-12"
      >
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#78AFFF]">
              Selected Work
            </p>

            <h2 className="text-5xl uppercase tracking-[-0.04em] md:text-7xl">
              Projects
            </h2>
          </div>

          <p className="hidden text-sm text-[#7191B8] md:block">
            2024 — 2026
          </p>
        </div>

        <div className="border-t border-white/15">
          {/* Project 01 - Collab Dev */}
          <article className="group grid gap-8 border-b border-white/15 py-16 md:grid-cols-[70px_1.3fr_1fr]">
            <span className="text-sm font-medium text-[#5B9CFF]">01</span>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#78AFFF]">
                Collaborative University Project
              </p>

              <h3 className="text-4xl uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
                Collab
                <br />
                Dev
              </h3>

              <div className="relative mt-10 aspect-[16/10] overflow-hidden bg-[#132A46]">
                <Image
                  src="/projects/collabdevss.png"
                  alt="University Open Day application built by the Collab Dev team"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#7191B8]">
                  Front-End Developer · Team of 7
                </p>

                <p className="max-w-md text-lg leading-relaxed">
                  A university Open Day web application built collaboratively by
                  a seven-person development team during my second year of
                  Computer Science.
                </p>

                <p className="mt-6 max-w-md leading-relaxed text-[#AEBFD3]">
                  As the front-end developer, I focused on the user-facing
                  experience and worked with the wider team to build and
                  integrate the application&apos;s interface.
                </p>
              </div>

              <div className="mt-10">
                <p className="mb-6 text-sm uppercase leading-7 tracking-wider text-[#D4DFEC]">
                  Front-End Development · UI
                  <br />
                  Team Collaboration · Web Development
                </p>

                <a
                  href="https://son-sont3rs-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-b border-[#5B9CFF] pb-1 text-sm uppercase tracking-wider text-[#5B9CFF] transition-colors hover:text-white"
                >
                  View Live Project ↗
                </a>
              </div>
            </div>
          </article>

          {/* Project 02 - Early Warning System */}
          <article className="group grid gap-8 border-b border-white/15 py-16 md:grid-cols-[70px_1.3fr_1fr]">
            <span className="text-sm font-medium text-[#5B9CFF]">02</span>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#78AFFF]">
                Final Year Project
              </p>

              <h3 className="text-4xl uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
                Early Warning
                <br />
                System
              </h3>

              <div className="relative mt-10 aspect-[16/10] overflow-hidden bg-[#132A46]">
                <Image
                  src="/projects/earlywarningss.png"
                  alt="Student Early Warning System application"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <p className="max-w-md text-lg leading-relaxed text-[#DCE5EF]">
                A machine-learning system that identifies students at risk of
                academic difficulty and optimises how limited intervention
                resources are allocated.
              </p>

              <div className="mt-10">
                <p className="mb-6 text-sm uppercase leading-7 tracking-wider text-[#AEBFD3]">
                  Python · Machine Learning
                  <br />
                  Optimisation · Streamlit
                </p>

                <a
                  href="#"
                  className="inline-block border-b border-[#5B9CFF] pb-1 text-sm uppercase tracking-wider text-[#5B9CFF] transition-colors hover:text-white"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          </article>

          {/* Project 03 - Pet Health Record API */}
          <article className="group grid gap-8 border-b border-white/15 py-16 md:grid-cols-[70px_1.3fr_1fr]">
            <span className="text-sm font-medium text-[#5B9CFF]">03</span>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#7191B8]">
                Software Development
              </p>

              <h3 className="text-4xl uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
                Pet Health
                <br />
                Record API
              </h3>

              <div className="mt-10 flex aspect-[16/10] items-center justify-center bg-[#132A46] text-sm uppercase tracking-widest text-[#7191B8] transition-colors duration-500 group-hover:bg-[#173557]">
                Project Screenshot
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <p className="max-w-md text-lg leading-relaxed text-[#DCE5EF]">
                REST API for managing pets, vaccinations, appointments and
                medical records using object-oriented software design.
              </p>

              <div className="mt-10">
                <p className="mb-6 text-sm uppercase leading-7 tracking-wider text-[#AEBFD3]">
                  Java · Spring Boot
                  <br />
                  MySQL · REST API
                </p>

                <a
                  href="#"
                  className="inline-block border-b border-[#5B9CFF] pb-1 text-sm uppercase tracking-wider text-[#5B9CFF] transition-colors hover:text-white"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          </article>

          {/* Project 04 - Machine Learning */}
          <article className="group grid gap-8 border-b border-white/15 py-16 md:grid-cols-[70px_1.3fr_1fr]">
            <span className="text-sm font-medium text-[#5B9CFF]">04</span>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#78AFFF]">
                Data Science
              </p>

              <h3 className="text-4xl uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
                Machine
                <br />
                Learning
              </h3>

              <div className="mt-10 flex aspect-[16/10] items-center justify-center bg-[#132A46] text-sm uppercase tracking-widest text-[#7191B8] transition-colors duration-500 group-hover:bg-[#173557]">
                Project Screenshot
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <p className="max-w-md text-lg leading-relaxed text-[#DCE5EF]">
                Data science project exploring regression and classification
                models, model evaluation and predictive performance.
              </p>

              <div className="mt-10">
                <p className="mb-6 text-sm uppercase leading-7 tracking-wider text-[#AEBFD3]">
                  Python · Pandas
                  <br />
                  Scikit-learn · Data Analysis
                </p>

                <a
                  href="#"
                  className="inline-block border-b border-[#5B9CFF] pb-1 text-sm uppercase tracking-wider text-[#5B9CFF] transition-colors hover:text-white"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          </article>

          {/* Project 05 - Book Management System */}
          <article className="group grid gap-8 border-b border-white/15 py-16 md:grid-cols-[70px_1.3fr_1fr]">
            <span className="text-sm font-medium text-[#5B9CFF]">05</span>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#7191B8]">
                Full-Stack Development
              </p>

              <h3 className="text-4xl uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
                Book Management
                <br />
                System
              </h3>

              <div className="mt-10 flex aspect-[16/10] items-center justify-center bg-[#132A46] text-sm uppercase tracking-widest text-[#7191B8] transition-colors duration-500 group-hover:bg-[#173557]">
                Project Screenshot
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <p className="max-w-md text-lg leading-relaxed text-[#DCE5EF]">
                Full-stack web application for managing and searching book
                records with CRUD functionality and database integration.
              </p>

              <div className="mt-10">
                <p className="mb-6 text-sm uppercase leading-7 tracking-wider text-[#AEBFD3]">
                  PHP · MySQL
                  <br />
                  JavaScript · AJAX
                </p>

                <a
                  href="#"
                  className="inline-block border-b border-[#5B9CFF] pb-1 text-sm uppercase tracking-wider text-[#5B9CFF] transition-colors hover:text-white"
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
        className="bg-[#12335A] px-6 py-24 text-[#F4F7FB] md:px-12 md:py-32"
      >
        <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#91BAF0]">
              About Me
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl leading-[1.05] tracking-[-0.04em] md:text-6xl">
              I enjoy solving problems, working with data and building practical
              applications.
            </h2>

            <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-[#C6D5E7]">
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
                developing applications and applying technical concepts to real
                problems.
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

        <div className="mt-24 grid gap-12 border-t border-white/20 pt-10 md:grid-cols-2">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#91BAF0]">
              Currently Exploring
            </p>

            <div className="flex max-w-xl flex-wrap gap-3">
              {[
                "Data Analytics",
                "Data Science",
                "Machine Learning",
                "AI",
                "Cloud",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#91BAF0]/40 bg-[#0B2748]/40 px-4 py-2 text-sm uppercase tracking-wider"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#91BAF0]">
              What I Bring
            </p>

            <div className="flex max-w-xl flex-wrap gap-3">
              {[
                "Problem Solving",
                "Technical Thinking",
                "Creativity",
                "Adaptability",
                "Curiosity",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#91BAF0]/40 bg-[#0B2748]/40 px-4 py-2 text-sm uppercase tracking-wider"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer
        id="contact"
        className="bg-[#03070D] px-6 pb-10 pt-24 text-[#F4F7FB] md:px-12 md:pt-32"
      >
        <p className="mb-8 text-sm uppercase tracking-[0.2em] text-[#78AFFF]">
          Get In Touch
        </p>

        <h2 className="max-w-6xl text-[15vw] uppercase leading-[0.78] tracking-[-0.07em] md:text-[9vw]">
          Let&apos;s
          <br />
          <span className="text-[#5B9CFF]">Connect.</span>
        </h2>

        <p className="mt-12 max-w-xl text-lg leading-relaxed text-[#9AAABD]">
          I&apos;m currently open to graduate opportunities and conversations
          around data, software, machine learning, AI and cloud.
        </p>

        <div className="mt-24 grid gap-10 border-t border-white/15 pt-8 md:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#7191B8]">
              Contact
            </p>

            <div className="flex flex-col items-start gap-3">
              <a
                href="mailto:jamessonter001@gmail.com"
                className="text-lg transition-colors hover:text-[#5B9CFF]"
              >
                jamessonter001@gmail.com ↗
              </a>

              <a
                href="tel:+447474529687"
                className="text-lg transition-colors hover:text-[#5B9CFF]"
              >
                07474 529687 ↗
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#7191B8]">
              Find Me
            </p>

            <div className="flex flex-col items-start gap-3">
              <a
                href="https://www.linkedin.com/in/james-beetseh-0525192b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg transition-colors hover:text-[#5B9CFF]"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/sont3r"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg transition-colors hover:text-[#5B9CFF]"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/15 pt-6 text-xs uppercase tracking-wider text-[#7191B8] md:flex-row">
          <p>© 2026 James Beetseh</p>

          <a href="#" className="transition-colors hover:text-[#5B9CFF]">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}