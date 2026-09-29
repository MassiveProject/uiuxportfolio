import { useEffect, useMemo, useRef, useState } from "react";

/* =========================================================

   WILUX — playful portfolio redesign

   Visual direction inspired by colorful editorial/product sites:

   oversized type, organic shapes, saturated accents, doodles,

   soft floating motion, and chunky rounded cards.

   ========================================================= */

const PROFILE = {

  name: "William Lie",

  headline: "UI/UX Designer",

  location: "Jakarta, Indonesia",

  email: "natanlie94@gmail.com",

  socials: {

    instagram: "https://instagram.com/wnliee/",

    linkedin: "https://www.linkedin.com/in/williamnatanlie/",

    x: "https://x.com/natanlie94",

  },

  available: true,

};

const PROJECTS = [

  {

    id: 6,

    title: "Hattatech",

    description:

      "Designed Hattatech’s website interface, marketing assets, and product visuals with a clean, professional, and conversion-driven approach.",

    cover: "/hatta-bg.png",

    tags: ["Wordpress", "Figma"],

    categories: ["web", "ui"],

    link: "https://www.figma.com/proto/93znEzR4jcdctthvld9VGT/Hattatech-Social-Media?node-id=449-456&t=0vioqIsPAcNDKVGZ-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",

    repo: "#",

    year: 2026,

    tone: "lime",

  },

  {

    id: 1,

    title: "Flashklik Website",

    description: "Designed Flashklik’s website with conversion-driving features.",

    cover: "/flashklikwebsite.png",

    tags: ["Wordpress"],

    category: "web",

    link: "https://flashklik.com/",

    repo: "#",

    year: 2025,

    tone: "cyan",

  },

  {

    id: 2,

    title: "Flashklik RoomFlow",

    description: "Designed RoomFlow for frictionless meeting-room booking.",

    cover: "/roomflow.png",

    tags: ["Figma"],

    category: "ui",

    link: "https://www.figma.com/proto/XlaC0eqsS8GLpxfHac37OC/RoomFlow-Portfolio?node-id=1-4&t=YtG9FoAeLIThNEX1-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",

    repo: "#",

    year: 2025,

    tone: "orange",

  },

  {

    id: 3,

    title: "Flashklik EasyPrint",

    description: "Designed EasyPrint into a smart pay-per-print experience.",

    cover: "/easyprint.png",

    tags: ["Figma"],

    category: "ui",

    link: "https://www.figma.com/proto/gzLIaI1uO0lHxU0K1tu3Zl/EasyPrint-Portfolio?node-id=1-2&p=f&t=w9YGCzNOxk9BRJLx-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",

    repo: "#",

    year: 2025,

    tone: "pink",

  },

  {

    id: 4,

    title: "Yakult Lady App",

    description:

      "Designed Yakult Lady mobile app to boost sales and empower seamless user experience.",

    cover: "/yakult.png",

    tags: ["Figma"],

    category: "ui",

    link: "https://www.figma.com/proto/giHztQNgedVOMqzK7EiAuI/Portfolio?node-id=1-3688&scaling=scale-down-width&content-scaling=fixed&t=jCPsm7R9t52fVKrO-1",

    repo: "#",

    year: 2023,

    tone: "purple",

  },

  {

    id: 5,

    title: "Amartha's Gold Investment Feature",

    description:

      "Designed Amartha’s gold investment feature through gamification, driving SME growth and elevating investor interest.",

    cover: "/amartha.png",

    tags: ["Figma"],

    category: "ui",

    link: "https://www.figma.com/proto/giHztQNgedVOMqzK7EiAuI/Portfolio?node-id=1-42&t=Fd3LLnGrpjLlQ0cb-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",

    repo: "#",

    year: 2022,

    tone: "yellow",

  },

];

const VIDEOS = [

  {

    id: "v1",

    title: "Flashklik EasyPrint",

    desc: "Print Result",

    cover: "/easyprintprintingresult.png",

    youtube: "https://youtu.be/dD6Pp5XqcPw?si=N_GNckvj7qHhZzdf",

  },

  {

    id: "v2",

    title: "Flashklik RoomFlow",

    desc: "Trusted by KEMENKES",

    cover: "/roomflowpoly.png",

    youtube: "https://youtu.be/w9uUPs3VhP4?si=jDzglejq7VJi8ohy",

  },

];

const MOCKUP_WORKS = [

  { id: 1, title: "Flashklik Business Card", cover: "/bisniscard.png", type: "Company Business Card" },

  { id: 2, title: "Flashklik Totebag", cover: "/flashkliktotebag.png", type: "Flashklik in collaboration with HP" },

  { id: 3, title: "Flashklik E-Toll", cover: "/etoll.png", type: "Flashklik in collaboration with HP" },

  { id: 4, title: "Flashklik Tumblr", cover: "/flashkliktumblr.png", type: "Flashklik in collaboration with HP" },

  { id: 5, title: "Hattatech Catalogue 2026", cover: "/catalog.png", type: "Product Catalogue Design" },

];

const STACKS = [

  { name: "Figma", role: "Interface Design Tool", logo: "/figmalogo.png" },

  { name: "VS Code", role: "Development Tool", logo: "/vscode.png" },

  { name: "Google Docs", role: "Copywriting Tool", logo: "/gdocs.png" },

  { name: "Wordpress", role: "Website-builder Tool", logo: "/wordpresslogo.png" },

  { name: "Capcut", role: "Video editing Tool", logo: "/capcut.png" },

  { name: "Photoshop", role: "Graphic Design Tool", logo: "/ps.png" },

  { name: "Adobe Illustrator", role: "Vector Design Tool", logo: "/illustrator.png" },

  { name: "Adobe InDesign", role: "Layout Design Tool", logo: "/indesign.png" },

];

const SKILLS_1 = ["Website Design", "Mobile Design", "UI/UX", "React", "Design Systems", "User Research"];

const SKILLS_2 = ["Communication", "Interaction Design", "Usability Testing", "Graphic Design", "Video Editing", "Creative Thinking"];

function cx(...classes) {

  return classes.filter(Boolean).join(" ");

}

function ArrowUpRight({ className = "h-4 w-4" }) {

  return (

    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">

      <path d="M7 17 17 7M8 7h9v9" />

    </svg>

  );

}

function ArrowRight({ className = "h-4 w-4" }) {

  return (

    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">

      <path d="M5 12h14M13 5l7 7-7 7" />

    </svg>

  );

}

function PlayIcon() {

  return (

    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 ml-1" aria-hidden="true">

      <path d="M8 5v14l11-7z" />

    </svg>

  );

}

function SectionKicker({ children, dark = false }) {

  return (

    <div className={cx("play-kicker", dark && "play-kicker-dark")}>&#x20;

      <span className="play-kicker-dot" />

      {children}

    </div>

  );

}

function DoodleStar({ className = "" }) {

  return (

    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">

      <path d="M60 4 69 43 105 21 78 52 118 60 78 68 105 99 69 77 60 116 51 77 15 99 42 68 2 60 42 52 15 21 51 43 60 4Z" fill="currentColor" />

    </svg>

  );

}

function DoodleArrow({ className = "" }) {

  return (

    <svg className={className} viewBox="0 0 170 110" fill="none" aria-hidden="true">

      <path d="M7 84c31-31 63-46 111-42 16 2 31 9 42 21" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeDasharray="3 10" />

      <path d="m146 44 14 19-23 4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function WavyDivider({ flip = false, tone = "cream" }) {

  return <div className={cx("play-wave", `play-wave-${tone}`, flip && "play-wave-flip")} aria-hidden="true" />;

}

function Header({ openNav, setOpenNav }) {

  return (

    <header className="play-header">

      <div className="play-container play-header-inner">

        <a href="#top" className="play-logo" aria-label="WILUX home">

          <img src="/wilux-logo.png" alt="WILUX logo" />

        </a>

        <nav className="play-nav hidden md:flex" aria-label="Primary navigation">

          <a href="#about">About</a>

          <a href="#projects">Projects</a>

          <a href="#skills">Skills</a>

        </nav>

        <a href="#contact" className="play-pill-button play-pill-lime hidden sm:inline-flex">

          Let’s talk <ArrowUpRight />

        </a>

        <button className="play-menu-button md:hidden" onClick={() => setOpenNav((v) => !v)} aria-label="Toggle menu" aria-expanded={openNav}>

          <span />

          <span />

        </button>

      </div>

      {openNav && (

        <div className="play-mobile-nav md:hidden">

          <a href="#about" onClick={() => setOpenNav(false)}>About</a>

          <a href="#projects" onClick={() => setOpenNav(false)}>Projects</a>

          <a href="#skills" onClick={() => setOpenNav(false)}>Skills</a>

          <a href="#contact" onClick={() => setOpenNav(false)}>Contact</a>

        </div>

      )}

    </header>

  );

}

function Hero({ greetIndex }) {

  const greetings = ["Halo", "你好", "Hello", "Olá", "Hola"];

  return (

    <section id="top" className="play-hero">

      <div className="play-noise" />

      <div className="play-orb play-orb-a" />

      <div className="play-orb play-orb-b" />

      <DoodleStar className="play-star play-star-a" />

      <DoodleStar className="play-star play-star-b" />

      <DoodleArrow className="play-hero-arrow" />

      <div className="play-container play-hero-inner">

        <div className="play-hero-topline">

          <div className="play-availability">

            <span className="play-availability-dot" />

            Available for freelance

          </div>

          <span className="play-mini-note typewriter-font">Jakarta • UI/UX • Visual</span>

        </div>

        <div className="play-hero-word" aria-hidden="true">

          {["W", "I", "L", "U", "X"].map((letter, index) => (

            <span className="play-hero-letter" key={`${letter}-${index}`}>

              {letter}

            </span>

          ))}

        </div>

        <div className="play-hero-grid">

          <div className="play-hero-copy">

            <div className="play-greeting typewriter-font">

              <span key={greetIndex} className="animate-fadeSlide inline-block">{greetings[greetIndex]},</span>

              <span> nice to meet you!</span>

            </div>

            <h1>

              I’m <span className="play-marker">William Natan Lie</span>,<br />

              a UI/UX Designer who makes digital products feel <em>clear</em>, <em>useful</em> & <em>alive.</em>

            </h1>

            <p className="play-hero-description">

              UI/UX Designer with 5+ years of experience in Figma, user research, design systems, and hi-fi prototyping. I craft intuitive digital experiences while also supporting brand growth through social media marketing, catalog design, product packaging, and visual content across digital platforms.

            </p>

            <div className="play-hero-actions">

              <a href="/william-resume.pdf" target="_blank" rel="noopener noreferrer" className="play-pill-button play-pill-lime play-pill-large">

                Review CV <ArrowUpRight />

              </a>

              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="play-pill-button play-pill-outline play-pill-large">

                LinkedIn <ArrowUpRight />

              </a>

            </div>

          </div>

          <div className="play-hero-visual">

            <div className="play-photo-sticker play-photo-sticker-one">PRODUCT<br />DESIGNER</div>

            <div className="play-photo-sticker play-photo-sticker-two">5+ YEARS<br />EXPERIENCE</div>

            <div className="play-photo-shell">

              <div className="play-photo-blob">

                <img src="/pp.png" alt="William Lie" />

              </div>

            </div>

            <div className="play-floating-figma">

              <img src="/figma.png" alt="" aria-hidden="true" />

            </div>

            <div className="play-scribble typewriter-font">designing with purpose ↗</div>

          </div>

        </div>

      </div>

      <WavyDivider tone="cream" />

    </section>

  );

}

function ProjectCard({ project, index }) {

  return (

    <article className={cx("play-project-card", `play-tone-${project.tone || "purple"}`, index % 2 ? "play-card-tilt-right" : "play-card-tilt-left")}>

      <a href={project.link} target="_blank" rel="noopener noreferrer" className="play-project-link">

        <div className="play-project-meta">

          <div className="flex flex-wrap gap-2">

            {project.tags?.map((tag) => <span key={tag}>{tag}</span>)}

          </div>

          <span className="play-year">{project.year}</span>

        </div>

        <div className="play-project-image-wrap">

          <img src={project.cover} alt={project.title} loading="lazy" />

          <div className="play-project-shine" />

          <div className="play-open-bubble"><ArrowUpRight className="h-6 w-6" /></div>

        </div>

        <div className="play-project-copy">

          <div>

            <p className="typewriter-font play-project-number">0{index + 1} / SELECTED WORK</p>

            <h3>{project.title}</h3>

          </div>

          <p>{project.description}</p>

        </div>

      </a>

    </article>

  );

}

function ProjectsSection({ filter, setFilter, filtered, showAll, setShowAll }) {

  return (

    <section id="projects" className="play-section play-projects-section">

      <div className="play-container">

        <div className="play-section-heading play-section-heading-split">

          <div>

            <SectionKicker>Selected work</SectionKicker>

            <h2>Digital products,<br /><span className="play-underline">but make it fun.</span></h2>

          </div>

          <div className="play-section-sidecopy">

            <p>Mobile and web projects I build to deliver clear, intuitive user experiences.</p>

            <div className="play-filters">

              {[{ k: "all", label: "All" }, { k: "web", label: "Web" }, { k: "ui", label: "UI" }].map((item) => (

                <button key={item.k} onClick={() => setFilter(item.k)} className={cx(filter === item.k && "is-active")}>{item.label}</button>

              ))}

            </div>

          </div>

        </div>

        <div className="play-project-grid">

          {(showAll ? filtered : filtered.slice(0, 4)).map((project, index) => (

            <ProjectCard key={project.id} project={project} index={index} />

          ))}

        </div>

        {filtered.length > 4 && (

          <div className="play-center-action">

            <button onClick={() => setShowAll((v) => !v)} className="play-pill-button play-pill-purple play-pill-large">

              {showAll ? "See less" : "See more projects"} <ArrowRight />

            </button>

          </div>

        )}

      </div>

    </section>

  );

}

function VideoSection() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);

  const getMaxScroll = (el) => Math.max(0, el.scrollWidth - el.clientWidth);

  const go = (dir) => {
    const el = trackRef.current;
    if (!el) return;

    const lastPage = Math.max(0, VIDEOS.length - 1);
    const nextPage = Math.max(0, Math.min(lastPage, page + dir));
    const maxScroll = getMaxScroll(el);

    setPage(nextPage);

    el.scrollTo({
      left: lastPage === 0 ? 0 : (nextPage / lastPage) * maxScroll,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;

    const lastPage = Math.max(0, VIDEOS.length - 1);
    const maxScroll = getMaxScroll(el);

    if (lastPage === 0 || maxScroll <= 1) {
      setPage(0);
      return;
    }

    const progress = Math.min(1, Math.max(0, el.scrollLeft / maxScroll));
    setPage(Math.round(progress * lastPage));
  };

  return (

    <section className="play-video-section">

      <WavyDivider flip tone="purple" />

      <div className="play-container play-video-content">

        <div className="play-section-heading play-section-heading-split play-heading-light">

          <div>

            <SectionKicker dark>Motion & story</SectionKicker>

            <h2>Products are better<br />when they <span>move.</span></h2>

          </div>

          <p>A selection of product videos I created to showcase features, spark engagement, and drive conversion.</p>

        </div>

        <div className="play-video-controls">

          <button onClick={() => go(-1)} aria-label="Previous video" disabled={page === 0}>←</button>

          <button onClick={() => go(1)} aria-label="Next video" disabled={page === VIDEOS.length - 1}>→</button>

        </div>

        <div ref={trackRef} onScroll={handleScroll} className="play-video-track no-scrollbar">

          {VIDEOS.map((video, i) => (

            <a key={video.id} href={video.youtube} target="_blank" rel="noopener noreferrer" className={cx("play-video-card", i % 2 ? "play-video-orange" : "play-video-cyan")}>

              <div className="play-video-image">

                <img src={video.cover} alt={video.title} loading="lazy" />

                <div className="play-play-button"><PlayIcon /></div>

              </div>

              <div className="play-video-copy">

                <span className="typewriter-font">0{i + 1} / VIDEO</span>

                <h3>{video.title}</h3>

                <p>{video.desc}</p>

              </div>

            </a>

          ))}

        </div>

        <div className="play-dots">

          {VIDEOS.map((video, i) => (
            <span
              key={video.id}
              className={cx(i === page && "is-active")}
              aria-hidden="true"
            />
          ))}

        </div>

      </div>

      <WavyDivider tone="cream" />

    </section>

  );

}

function MockupCard({ item, index, onOpen }) {

  const tones = ["pink", "lime", "cyan", "orange", "purple"];

  return (

    <button type="button" onClick={onOpen} className={cx("play-mockup-card", `play-mockup-${tones[index % tones.length]}`)}>

      <div className="play-mockup-image">

        <img src={item.cover} alt={item.title} loading="lazy" />

        <div className="play-open-bubble"><ArrowUpRight className="h-6 w-6" /></div>

      </div>

      <div className="play-mockup-copy">

        <p className="typewriter-font">{item.type || "3D Mockup"}</p>

        <h3>{item.title}</h3>

      </div>

    </button>

  );

}

function BestProjectsSection() {

  const [active, setActive] = useState(null);

  const [zoom, setZoom] = useState(false);

  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? MOCKUP_WORKS : MOCKUP_WORKS.slice(0, 4);

  useEffect(() => {

    const onKey = (e) => e.key === "Escape" && setActive(null);

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);

  }, []);

  useEffect(() => {

    if (!active) return undefined;

    const prev = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    setZoom(false);

    return () => { document.body.style.overflow = prev; };

  }, [active]);

  return (

    <section className="play-section play-mockups-section">

      <div className="play-container">

        <div className="play-section-heading play-section-heading-split">

          <div>

            <SectionKicker>Visual explorations</SectionKicker>

            <h2>Digital event<br /><span className="play-marker-dark">products.</span></h2>

          </div>

          <p>A curated collection of 3D mockups and visual explorations — focused on clarity, depth, and presentation.</p>

        </div>

        <div className="play-mockup-grid">

          {visibleItems.map((item, index) => (

            <MockupCard key={item.id} item={item} index={index} onOpen={() => setActive(item)} />

          ))}

        </div>

        {MOCKUP_WORKS.length > 4 && (

          <div className="play-center-action">

            <button className="play-pill-button play-pill-white play-pill-large" onClick={() => setShowAll((v) => !v)}>

              {showAll ? "See less" : "See more"} <ArrowRight />

            </button>

          </div>

        )}

      </div>

      {active && (

        <div className="play-lightbox" role="dialog" aria-modal="true" onMouseDown={(e) => e.target === e.currentTarget && setActive(null)}>

          <div className="play-lightbox-card">

            <div className="play-lightbox-top">

              <div>

                <p className="typewriter-font">{active.type || "3D Mockup"}</p>

                <h3>{active.title}</h3>

              </div>

              <div className="flex gap-2">

                <button onClick={() => setZoom((v) => !v)}>{zoom ? "Fit" : "Zoom"}</button>

                <button onClick={() => setActive(null)} aria-label="Close">×</button>

              </div>

            </div>

            <div className={cx("play-lightbox-image", zoom && "is-zoomed")}>

              <img src={active.cover} alt={active.title} />

            </div>

            <p className="play-lightbox-tip typewriter-font">Click outside to close • Press ESC</p>

          </div>

        </div>

      )}

    </section>

  );

}

function AboutShowcase() {

  return (

    <section id="about" className="play-about-section">

      <div className="play-about-dots" />

      <DoodleStar className="play-about-star" />

      <div className="play-container play-about-grid">

        <div className="play-about-copy">

          <SectionKicker dark>About William</SectionKicker>

          <h2>WEB & MOBILE<br /><span>DESIGN</span> EXPERT</h2>

          <p>Specialized in intuitive, efficient, and engaging product design with seamless functionality for measurable business results.</p>

          <div className="play-about-stats">

            <div><strong>5+</strong><span>Years crafting digital experiences</span></div>

            <div><strong>UI/UX</strong><span>Design, research & prototyping</span></div>

          </div>

          <div className="play-location typewriter-font">⌖ Based in {PROFILE.location}</div>

        </div>

        <div className="play-about-visual">

          <div className="play-about-photo-frame">

            <img src="/pp.png" alt="About William" />

          </div>

          <div className="play-about-note typewriter-font">I turn complex flows into simple moments ✦</div>

          <DoodleArrow className="play-about-arrow" />

        </div>

      </div>

      <WavyDivider tone="cream" />

    </section>

  );

}

function StackCard({ item, index }) {

  const tones = ["lime", "cyan", "orange", "pink"];

  return (

    <div className={cx("play-stack-card", `play-stack-${tones[index % tones.length]}`)}>

      <div className="play-stack-logo"><img src={item.logo} alt="" /></div>

      <div>

        <h3>{item.name}</h3>

        <p className="typewriter-font">{item.role}</p>

      </div>

      <span>↗</span>

    </div>

  );

}

function StacksSection() {

  return (

    <section id="stacks" className="play-section play-stacks-section">

      <div className="play-container">

        <div className="play-section-heading play-section-heading-split">

          <div>

            <SectionKicker>My toolbox</SectionKicker>

            <h2>Tools I use to<br /><span className="play-underline">make ideas real.</span></h2>

          </div>

          <p>Commitment to staying updated with the latest design trends and techniques.</p>

        </div>

        <div className="play-stack-grid">

          {STACKS.map((item, index) => <StackCard key={item.name} item={item} index={index} />)}

        </div>

      </div>

    </section>

  );

}

function TextBelt({ items, reverse = false }) {

  const row = [...items, ...items, ...items];

  return (

    <div className="play-marquee">

      <div className="play-marquee-track" style={{ animationDirection: reverse ? "reverse" : "normal" }}>

        {row.map((item, i) => (

          <span key={`${item}-${i}`}>{item}<i>✦</i></span>

        ))}

      </div>

    </div>

  );

}

function SkillsSection() {

  return (

    <section id="skills" className="play-skills-section">

      <div className="play-container play-skills-heading">

        <SectionKicker dark>Skills & superpowers</SectionKicker>

        <h2>Designing, thinking,<br />testing, <span>making.</span></h2>

      </div>

      <div className="mt-10 md:mt-14 space-y-4">

        <TextBelt items={SKILLS_1} />

        <TextBelt items={SKILLS_2} reverse />

      </div>

    </section>

  );

}

function ContactSection({ location }) {

  const WA_PHONE = "6281546845281";

  const preset = "Hi William, I came from your portfolio and would like to discuss a project.";

  const waLink = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(preset)}`;

  return (

    <section id="contact" className="play-contact-section">

      <div className="play-container">

        <div className="play-contact-card">

          <DoodleStar className="play-contact-star" />

          <div className="play-contact-face">:)</div>

          <SectionKicker>Have a project?</SectionKicker>

          <h2>Let’s make something<br /><span>people enjoy using.</span></h2>

          <p>I help companies and businesses turn goals into measurable growth, design that lifts conversion, speeds adoption, and streamlines operations. Let’s talk about your website, product, or design needs.</p>

          {location && <div className="play-contact-location typewriter-font">Based in {location}</div>}

          <a href={waLink} target="_blank" rel="noopener noreferrer" className="play-pill-button play-pill-purple play-pill-huge">

            Contact me on WhatsApp <ArrowUpRight className="h-6 w-6" />

          </a>

        </div>

      </div>

    </section>

  );

}

function Footer() {

  return (

    <footer className="play-footer">

      <div className="play-container play-footer-inner">

        <div>

          <img src="/wilux-logo.png" alt="WILUX" />

          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>

        </div>

        <div className="play-footer-links">

          <a href={PROFILE.socials.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>

          <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>

          <a href={PROFILE.socials.x} target="_blank" rel="noreferrer">X ↗</a>

        </div>

      </div>

    </footer>

  );

}

function usePlayfulScrollReveal() {

  useEffect(() => {

    if (typeof window === "undefined" || typeof document === "undefined") {

      return undefined;

    }

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {

      return undefined;

    }

    const selector = [

      ".play-section-heading",

      ".play-project-card",

      ".play-video-controls",

      ".play-video-card",

      ".play-dots",

      ".play-mockup-card",

      ".play-center-action",

      ".play-about-copy",

      ".play-about-visual",

      ".play-stack-card",

      ".play-skills-heading",

      ".play-marquee",

      ".play-contact-card",

      ".play-footer-inner",

    ].join(",");

    const registered = new WeakSet();

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          const el = entry.target;

          el.classList.remove("play-reveal-pending");

          // Restart cleanly if a browser painted the pending state first.

          void el.offsetWidth;

          el.classList.add("play-scroll-reveal");

          observer.unobserve(el);

        });

      },

      {

        threshold: 0.12,

        rootMargin: "0px 0px -7% 0px",

      }

    );

    const register = (root = document) => {

      const nodes = [];

      if (root instanceof Element && root.matches(selector)) {

        nodes.push(root);

      }

      if (root.querySelectorAll) {

        nodes.push(...root.querySelectorAll(selector));

      }

      nodes.forEach((el, index) => {

        if (registered.has(el)) return;

        if (el.closest(".play-hero")) return;

        registered.add(el);

        el.classList.add("play-reveal-pending");

        // Small repeating stagger makes grids/cards feel more organic.

        el.style.setProperty("--reveal-delay", `${(index % 4) * 65}ms`);

        observer.observe(el);

      });

    };

    register(document);

    // Also catches cards added later by "See more", filters, etc.

    const mutationObserver = new MutationObserver((mutations) => {

      mutations.forEach((mutation) => {

        mutation.addedNodes.forEach((node) => {

          if (node instanceof Element) register(node);

        });

      });

    });

    const main = document.querySelector(".play-site main");

    if (main) {

      mutationObserver.observe(main, {

        childList: true,

        subtree: true,

      });

    }

    return () => {

      observer.disconnect();

      mutationObserver.disconnect();

    };

  }, []);

}

export default function Portfolio() {

  const [filter, setFilter] = useState("all");

  const [showAll, setShowAll] = useState(false);

  const [openNav, setOpenNav] = useState(false);

  const [showTop, setShowTop] = useState(false);

  const [greetIndex, setGreetIndex] = useState(0);

  usePlayfulScrollReveal();

  const filtered = useMemo(

    () => filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter || p.categories?.includes(filter)),

    [filter]

  );

  useEffect(() => setShowAll(false), [filter]);

  useEffect(() => {

    const id = setInterval(() => setGreetIndex((i) => (i + 1) % 5), 900);

    return () => clearInterval(id);

  }, []);

  useEffect(() => {

    const onScroll = () => setShowTop(window.scrollY > 500);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);

  }, []);

  return (

    <div className="play-site">

      <Header openNav={openNav} setOpenNav={setOpenNav} />

      <main>

        <Hero greetIndex={greetIndex} />

        <ProjectsSection filter={filter} setFilter={setFilter} filtered={filtered} showAll={showAll} setShowAll={setShowAll} />

        <VideoSection />

        <BestProjectsSection />

        <AboutShowcase />

        <StacksSection />

        <SkillsSection />

        <ContactSection location={PROFILE.location} />

      </main>

      <Footer />

      <button

        className={cx("play-back-top", showTop && "is-visible")}

        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

        aria-label="Back to top"

      >

        ↑

      </button>

    </div>

  );

}
