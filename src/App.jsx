import { useEffect, useMemo, useRef, useState } from "react";

/* =========================================================

   DESIGN BY WILLIE — playful portfolio redesign

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

        <a href="#top" className="play-logo" aria-label="Back to home">

          <img src="/logo-blue.png" alt="Logo William Lie" />

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

  // Magnetic sticker: mouse moves the badge a few pixels, without React rerenders.
  // The CSS animation handles the gentle floating loop independently.
  const handleStickerPointerMove = (event) => {
    if (event.pointerType !== "mouse") return;
    const badge = event.currentTarget.querySelector(".willie-brand-sticker");
    if (!badge) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
    const y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
    badge.style.setProperty("--magnetic-x", `${(x * 9).toFixed(1)}px`);
    badge.style.setProperty("--magnetic-y", `${(y * 5).toFixed(1)}px`);
    badge.style.setProperty("--magnetic-rotate", `${(x * 4).toFixed(1)}deg`);
  };

  const resetStickerPointer = (event) => {
    const badge = event.currentTarget.querySelector(".willie-brand-sticker");
    if (!badge) return;
    ["--magnetic-x", "--magnetic-y", "--magnetic-rotate"].forEach((name) => {
      badge.style.removeProperty(name);
    });
  };

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

        <div className="willie-brand-stage" role="img" aria-label="DESIGN — design by willie">

          <div className="willie-brand-main" aria-hidden="true">

            {["D", "E", "S", "I", "G", "N"].map((letter, index) => (

              <span className="willie-brand-letter" key={`${letter}-${index}`}>
                <span className="willie-brand-letter-inner">{letter}</span>
              </span>

            ))}

          </div>

          <div
            className="willie-brand-sticker-shell"
            aria-hidden="true"
            onPointerMove={handleStickerPointerMove}
            onPointerLeave={resetStickerPointer}
            title="Move your mouse here!"
          >
            <div className="willie-brand-sticker">
              <span className="willie-brand-sticker-star">✳</span>
              <span>design by <strong>willie</strong></span>
              <span className="willie-brand-sticker-star">✳</span>
            </div>
          </div>

          <div className="willie-brand-caption" aria-hidden="true">where bold ideas come to life ↗</div>

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

          <a href="#top" className="willie-footer-logo" aria-label="Back to top — design by willie">

            <span>design</span><small>by willie ✳</small>

          </a>

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

function BrandStyles() {
  return <style>{`/* DESIGN BY WILLIE — brand system for this exact React portfolio.
   Self-contained: no changes needed to your existing CSS files. */
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Fredoka:wght@500;600;700&display=swap');

/* NAVBAR LOGO ONLY — visually enlarge the image, NOT its header/layout box.
   Change 1.28 below if you want a slightly larger or smaller logo. */
.play-site .play-header .play-logo {
  position: relative;
  overflow: visible;
  flex-shrink: 0;
}
.play-site .play-header .play-logo img {
  display: block;
  transform: scale(1.28);
  transform-origin: left center;
  transition: transform 260ms ease;
}
@media (max-width: 768px) {
  .play-site .play-header .play-logo img {
    transform: scale(1.13);
  }
}


/* The hero headline replaces the old WILUX wordmark. */
.play-site .willie-brand-stage {
  position: relative;
  isolation: isolate;
  width: 100%;
  max-width: 100%;
  margin: clamp(38px, 4.3vw, 82px) auto clamp(78px, 7.5vw, 140px);
  padding: 0 3px clamp(26px, 2vw, 40px);
  text-align: center;
}
.play-site .willie-brand-main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  max-width: 100%;
  width: 100%;
  color: #fffdfd;
  font-family: 'Fredoka', 'Arial Rounded MT Bold', system-ui, sans-serif;
  font-size: clamp(58px, 19.2vw, 360px);
  font-weight: 700;
  line-height: .83;
  letter-spacing: -.09em;
  white-space: nowrap;
  user-select: none;
  filter: drop-shadow(0 8px 0 rgba(40, 16, 110, .10));
}
.play-site .willie-brand-letter {
  position: relative;
  display: inline-block;
  flex: 0 1 auto;
  transform-origin: 50% 75%;
  animation: willie-letter-in .65s cubic-bezier(.2,1.35,.4,1) both;
  animation-delay: calc(var(--willie-i, 0) * 75ms);
}
.play-site .willie-brand-letter:nth-child(1) { --willie-i: 0; transform: rotate(-6deg) translateY(5px); }
.play-site .willie-brand-letter:nth-child(2) { --willie-i: 1; color: #fff; transform: rotate(5deg) translateY(-7px); }
.play-site .willie-brand-letter:nth-child(3) { --willie-i: 2; transform: rotate(-7deg) translateY(7px); }
.play-site .willie-brand-letter:nth-child(4) { --willie-i: 3; color: #baff59; transform: rotate(9deg) translateY(-9px); }
.play-site .willie-brand-letter:nth-child(5) { --willie-i: 4; transform: rotate(-5deg) translateY(6px); }
.play-site .willie-brand-letter:nth-child(6) { --willie-i: 5; transform: rotate(5deg) translateY(-4px); }
/* The nested letters bob asynchronously forever; hover gives each letter a bounce. */
.play-site .willie-brand-letter-inner {
  display: inline-block;
  animation: willie-letter-float 4s ease-in-out infinite;
  animation-delay: calc(var(--willie-i, 0) * -460ms);
  transition: transform .28s cubic-bezier(.2, 1.6, .35, 1), text-shadow .28s ease;
  will-change: translate;
}
@media (hover: hover) and (pointer: fine) {
  .play-site .willie-brand-letter:hover .willie-brand-letter-inner {
    transform: translateY(-11px) rotate(-7deg) scale(1.09);
    text-shadow: 3px 7px 0 rgba(29, 8, 95, .24);
  }
}
@keyframes willie-letter-float {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -7px; }
}
@keyframes willie-letter-in {
  from { opacity: 0; scale: .74; translate: 0 22px; }
  to   { opacity: 1; scale: 1; translate: 0 0; }
}
.play-site .willie-brand-sticker-shell {
  position: absolute;
  left: 50%;
  bottom: -40px;
  z-index: 2;
  max-width: 92%;
  transform: translateX(-50%) rotate(-3deg);
  animation: willie-sticker-rise .8s .6s cubic-bezier(.2,1.35,.4,1) backwards;
}
.play-site .willie-brand-sticker {
  --magnetic-x: 0px;
  --magnetic-y: 0px;
  --magnetic-rotate: 0deg;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: clamp(8px, 1.1vw, 17px);
  max-width: 100%;
  padding: clamp(8px, 1vw, 13px) clamp(17px, 2.8vw, 46px);
  border: clamp(2px, .25vw, 4px) solid #211045;
  border-radius: 80px 55px 75px 62px;
  background: #baff59;
  box-shadow: 9px 11px 0 #1c1049;
  color: #201248;
  font: 700 clamp(24px, 4.2vw, 76px)/1 'Caveat', 'Comic Sans MS', cursive;
  white-space: nowrap;
  cursor: default;
  user-select: none;
  animation: willie-sticker-float 4.5s ease-in-out infinite;
  /* The transform responds to the pointer; translate animates separately. */
  transform: translate3d(var(--magnetic-x), var(--magnetic-y), 0) rotate(var(--magnetic-rotate)) scale(1);
  transition: transform .32s cubic-bezier(.2,1.45,.4,1), box-shadow .28s ease, background .28s ease;
  will-change: translate, transform;
}
.play-site .willie-brand-sticker strong {
  font-weight: 700;
  color: #6332e7;
  transition: color .25s ease;
}
.play-site .willie-brand-sticker-star {
  display: inline-block;
  color: #ff8d52;
  font: 700 .55em/1 'Fredoka', system-ui, sans-serif;
}
.play-site .willie-brand-sticker-star:last-child { transform: rotate(25deg); }
@media (hover: hover) and (pointer: fine) {
  .play-site .willie-brand-sticker-shell:hover .willie-brand-sticker {
    background: #cdff75;
    box-shadow: 13px 16px 0 #1c1049;
    transform: translate3d(var(--magnetic-x), var(--magnetic-y), 0) rotate(var(--magnetic-rotate)) scale(1.065);
  }
  .play-site .willie-brand-sticker-shell:hover .willie-brand-sticker strong { color: #4217ce; }
  .play-site .willie-brand-sticker-shell:hover .willie-brand-sticker-star:first-child {
    animation: willie-star-wiggle .65s ease-in-out both;
  }
  .play-site .willie-brand-sticker-shell:hover .willie-brand-sticker-star:last-child {
    animation: willie-star-wiggle .65s .08s ease-in-out both;
  }
}
@keyframes willie-sticker-float {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -7px; }
}
@keyframes willie-star-wiggle {
  0%, 100% { rotate: 0deg; scale: 1; }
  50% { rotate: 35deg; scale: 1.24; }
}
@keyframes willie-sticker-rise {
  from { opacity: 0; translate: 0 32px; scale: .82; }
  to   { opacity: 1; translate: 0 0; scale: 1; }
}
.play-site .willie-brand-caption {
  position: absolute;
  right: 1.5%;
  bottom: -56px;
  color: #fff;
  font: 700 clamp(13px, 1.2vw, 20px)/1.15 'Caveat', cursive;
  transform: rotate(6deg);
  white-space: nowrap;
}

.play-site .willie-footer-logo {
  display: inline-flex;
  flex-direction: column;
  width: max-content;
  text-decoration: none;
  transform: rotate(-3deg);
  transition: transform .2s ease;
}
.play-site .willie-footer-logo:hover { transform: rotate(0deg) scale(1.03); }
.play-site .willie-footer-logo > span {
  color: #baff59;
  font: 700 clamp(33px, 4vw, 62px)/.9 'Fredoka', system-ui, sans-serif;
  letter-spacing: -.065em;
}
.play-site .willie-footer-logo > small {
  align-self: flex-end;
  padding-top: 3px;
  /* Dark muted purple: readable on the cream footer background. */
  color: #766f83;
  font: 700 clamp(20px, 2vw, 31px)/1 'Caveat', cursive;
}
@media (max-width: 768px) {
  .play-site .willie-brand-stage {
    margin-top: 54px;
    margin-bottom: 110px;
  }
  .play-site .willie-brand-main { font-size: clamp(46px, 18.3vw, 148px); }
  .play-site .willie-brand-sticker-shell { bottom: -33px; }
  .play-site .willie-brand-sticker { box-shadow: 5px 6px 0 #1c1049; }
  .play-site .willie-brand-caption { right: 1%; bottom: -75px; }
}
@media (max-width: 480px) {
  .play-site .willie-brand-stage {
    margin-top: 46px;
    margin-bottom: 100px;
  }
  .play-site .willie-brand-main {
    font-size: 18vw;
    letter-spacing: -.105em;
  }
  .play-site .willie-brand-sticker-shell { bottom: -26px; }
  .play-site .willie-brand-sticker {
    font-size: clamp(22px, 6.2vw, 32px);
    padding: 7px 14px 9px;
  }
  .play-site .willie-brand-caption { bottom: -66px; font-size: 13px; }
}
@media (prefers-reduced-motion: reduce) {
  .play-site .willie-brand-letter,
  .play-site .willie-brand-letter-inner,
  .play-site .willie-brand-sticker-shell,
  .play-site .willie-brand-sticker,
  .play-site .willie-brand-sticker-star { animation: none !important; transition: none !important; }
  .play-site .willie-brand-sticker-shell:hover .willie-brand-sticker { transform: none; }
}
`}</style>;
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

      <BrandStyles />

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
