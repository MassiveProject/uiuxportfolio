import { useMemo, useState, useEffect, useRef } from "react";

/* ====== EDIT HERE: Your Profile ====== */
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

/* ====== SAMPLE PROJECT DATA ====== */
const PROJECTS = [
  {
    id: 1,
    title: "Flashklik Website",
    description: "Designed Flashklik’s website with conversion-driving features.",
    cover: "/website.png",
    tags: ["Wordpress"],
    category: "web",
    link: "https://flashklik.com/",
    repo: "#",
    year: 2025,
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
  },
];

/* ====== VIDEO DATA ====== */
const VIDEOS = [
  { id: "v1", src: "/feresultprint.mp4", title: "Flashklik EasyPrint", desc: "Print Result" },
  { id: "v2", src: "/kemenkes.mp4", title: "Flashklik RoomFlow", desc: "Trusted by KEMENKES" },
];

/* ====== STACKS DATA ====== */
const STACKS = [
  { name: "Figma", role: "Interface Design Tool", logo: "/figmalogo.png" },
  { name: "VS Code", role: "Development Tool", logo: "/vscode.png" },
  { name: "Google Docs", role: "Copywriting Tool", logo: "/gdocs.png" },
  { name: "Wordpress", role: "Website-builder Tool", logo: "/wordpresslogo.png" },
  { name: "Capcut", role: "Video editing Tool", logo: "/capcut.png" },
  { name: "Photoshop", role: "Graphic Design Tool", logo: "/ps.png" },
];

/* ====== UTIL ====== */
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* ========= SPARKLE BUTTON ========= */
function SparkleButton({ href = "#projects", children = "See Projects", className = "" }) {
  const stars = useMemo(
    () =>
      Array.from({ length: 16 }).map(() => ({
        size: 6 + Math.random() * 8,
        dx: (Math.random() * 140 - 70).toFixed(0),
        dy: (Math.random() * 110 - 55).toFixed(0),
        delay: (Math.random() * 1.6).toFixed(2),
        duration: 1.6 + Math.random() * 0.8,
        opacity: 0.75 + Math.random() * 0.25,
      })),
    []
  );

  return (
    <>
      <style>{`
        .sparkle-btn{position:relative;overflow:visible;box-shadow:0 8px 22px rgba(0,0,0,.25);
          transition:transform .15s ease, box-shadow .2s ease, background-color .2s ease;}
        .sparkle-btn:hover{transform:translateY(-1px);box-shadow:0 12px 28px rgba(0,0,0,.32)}
        .sparkle-field{pointer-events:none;position:absolute;inset:-6px}
        .sparkle-star{position:absolute;left:50%;top:50%;width:var(--size);height:var(--size);
          transform:translate(-50%,-50%) scale(.2);color:#fff;opacity:0;
          filter:drop-shadow(0 0 6px rgba(255,255,255,.85));
          animation:sparkle-fly var(--dur) linear infinite;animation-delay:var(--delay)}
        .sparkle-star::after{content:"";position:absolute;inset:-6px;
          background:radial-gradient(circle,rgba(255,255,255,.45),transparent 60%);
          border-radius:50%;filter:blur(6px)}
        @keyframes sparkle-fly{
          0%{opacity:0;transform:translate(-50%,-50%) scale(.2) rotate(0deg)}
          10%{opacity:1}
          100%{opacity:0;transform:translate(calc(-50% + var(--x)),calc(-50% + var(--y))) scale(1) rotate(180deg)}
        }

        /* --- Hide all WebKit media controls --- */
        video::-webkit-media-controls,
        video::-webkit-media-controls-enclosure,
        video::-webkit-media-controls-panel,
        video::-webkit-media-controls-play-button,
        video::-webkit-media-controls-start-playback-button,
        video::-webkit-media-controls-overlay-play-button,
        video::-webkit-media-controls-timeline,
        video::-webkit-media-controls-current-time-display,
        video::-webkit-media-controls-time-remaining-display,
        video::-webkit-media-controls-mute-button,
        video::-webkit-media-controls-volume-slider,
        video::-internal-media-controls-download-button {
          display: none !important;
          -webkit-appearance: none !important;
        }
      `}</style>

      <a
        href={href}
        className={[
          "sparkle-btn inline-flex items-center justify-center gap-3 rounded-lg px-4 py-2 font-semibold",
          "bg-indigo-600 text-white hover:bg-indigo-500",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600",
          "w-full sm:w-auto text-center",
          className,
        ].join(" ")}
      >
        {children}
        <div className="sparkle-field">
          {stars.map((s, i) => (
            <span
              key={i}
              className="sparkle-star"
              style={{
                "--x": `${s.dx}px`,
                "--y": `${s.dy}px`,
                "--delay": `${s.delay}s`,
                "--dur": `${s.duration}s`,
                "--size": `${s.size}px`,
                opacity: s.opacity,
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l2.6 5.7 6.3.9-4.6 4.3 1.1 6.2L12 16.8 6.6 19l1.1-6.2L3 8.6l6.3-.9L12 2z" />
              </svg>
            </span>
          ))}
        </div>
      </a>
    </>
  );
}

/* ===== Scroll reveal helper ===== */
function useInView(options = { root: null, rootMargin: "-10% 0px", threshold: 0.2 }) {
  const [inView, setInView] = useState(false);
  const ref = useMemo(() => ({ current: null }), []);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), options);
    io.observe(ref.current);
    return () => io.disconnect();
  }, [options, ref]);
  return [ref, inView];
}

function useScrollZoom() {
  const ref = useRef(null);
  const [p, setP] = useState(0); // 0..1, 1 saat elemen berada di tengah viewport

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // progress: 1 saat center elemen = center viewport, turun ke 0 saat jauh
      const center = r.top + r.height / 2;
      const progress = 1 - Math.min(Math.max(Math.abs(center - vh / 2) / (vh * 0.6), 0), 1);

      setP(progress);
      el.style.setProperty("--p", progress.toFixed(3)); // kalau mau dipakai via CSS var
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return [ref, p];
}


/* ====== MAIN COMPONENT ====== */
export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const filtered = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  const [showAll, setShowAll] = useState(false);
  useEffect(() => setShowAll(false), [filter]);

  const GREETINGS = ["Halo", "你好", "Hello", "Olá", "Hola"];
  const [greetIndex, setGreetIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setGreetIndex((i) => (i + 1) % GREETINGS.length), 800);
    return () => clearInterval(id);
  }, []);

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100 pt-16 md:pt-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/70 border-b border-slate-200/60 dark:border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-24">
            <a href="#" className="flex items-center gap-3">
              <img src="/wilux-logo.png" alt="WILUX logo" className="h-10 md:h-12 w-auto object-contain select-none" width={160} height={48} />
              <span className="sr-only">WILUX Portfolio</span>
            </a>
            <nav className="hidden md:flex gap-8 text-sm">
              <a className="hover:underline" href="#about">About</a>
              <a className="hover:underline" href="#projects">Projects</a>
              <a className="hover:underline" href="#skills">Skills</a>
            </nav>
            <div className="hidden sm:flex items-center gap-2">
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500">Contact</a>
            </div>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-slate-200/40 dark:hover:bg-slate-800/60"
              onClick={() => setOpenNav((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
          {openNav && (
            <div className="md:hidden pb-4">
              <div className="mt-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur p-2">
                <a href="#about" className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">About</a>
                <a href="#projects" className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Projects</a>
                <a href="#skills" className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Skills</a>
                <a href="#contact" className="block px-3 py-2 rounded-lg bg-indigo-600 text-white mt-1">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/20 dark:to-slate-950"></div>
        <SingleIcon src="/figma.png" size={220} left="14%" top="58%" opacity={0.16} rotate={-4} dur="16s" delay="-2s" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-700 dark:text-emerald-300 border border-emerald-600/20">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
                Available for freelance
              </span>
              <h1 className="mt-3 text-[clamp(28px,6vw,40px)] md:text-5xl font-extrabold tracking-tight leading-[1.2] md:leading-[1.1]">
                <span className="relative inline-block h-[1em] overflow-hidden align-baseline">
                  <span key={greetIndex} className="block animate-fadeSlide">{["Halo","你好","Hello","Olá","Hola"][greetIndex]},</span>
                </span>{" "}
                I'm <span className="text-indigo-600">{PROFILE.name}</span><br/>{PROFILE.headline}
              </h1>
              <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
                Junior UI/UX Designer skilled in Figma, user research, design systems, and hi-fi prototyping, crafting intuitive experiences that boost user satisfaction and business impact.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <SparkleButton href="#projects">See Projects</SparkleButton>
                <a href="https://drive.google.com/file/d/1NuAns-vA-CnPLlFEd6vpnsqWP4Xc_7KV/view?usp=sharing" className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow w-full sm:w-auto text-center">Review CV</a>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative before:content-[''] before:absolute before:-left-3 before:top-3 before:h-10 before:w-10 before:bg-slate-800/70 before:rounded-tr-2xl before:rounded-bl-2xl before:-z-10">
                <div className="h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[380px] lg:w-[380px] rounded-full overflow-hidden ring-[8px] md:ring-[10px] ring-slate-900/60 dark:ring-slate-800/70 bg-slate-900/30">
                  <img src="/pp.png" alt="Profile" className="h-full w-full object-cover object-[50%_22%] md:object-[50%_32%]" />
                </div>
              </div>
              <div className="absolute -bottom-2 right-0 hidden md:block bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 shadow">
                <p className="text-xs text-slate-600 dark:text-slate-400">✨ 4+ years building UI</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Figma, Visual Design, React</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects (VERTICAL BANNERS + REVEAL) */}
      <section id="projects" className="scroll-mt-24 py-12 md:py-20 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Selected Projects</h2>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {[
                { k: "all", label: "All" },
                { k: "web", label: "Web" },
                { k: "ui", label: "UI" },
              ].map((f) => (
                <button
                  key={f.k}
                  onClick={() => setFilter(f.k)}
                  className={cx(
                    "px-3 py-1 text-sm rounded-full border shrink-0",
                    filter === f.k ? "bg-indigo-600 text-white border-indigo-600" : "border-slate-300 dark:border-slate-700"
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* stack vertikal setara video banner */}
          <div className="mt-8 space-y-8 md:space-y-10">
            {(showAll ? filtered : filtered.slice(0, 3)).map((p, i) => (
              <ProjectBanner key={p.id} p={p} index={i} />
            ))}
          </div>

          {filtered.length > 3 && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAll((v) => !v)}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:shadow text-sm font-semibold"
              >
                {showAll ? "See less" : "See more"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== VIDEO CAROUSEL ===== */}
      <VideoCarouselSection videos={VIDEOS} />

      {/* ===== ABOUT ===== */}
      <AboutShowcase />

      {/* Stacks */}
      <StacksSection />

      {/* Skills */}
      <section id="skills" className="relative scroll-mt-24 py-12 md:py-20 overflow-visible">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
          <TextBelt items={["Website Design","Mobile Design","UI/UX","React","Design Systems","User Research"]} speed={24} emphasis="indigo" className="mt-6" />
          <TextBelt items={["Communication","Interaction Design","Usability Testing","Graphic Design","Video Editing","Creative Thinking"]} speed={30} reverse emphasis="slate" className="mt-4" />
        </div>
        <div className="hidden sm:block">
          <SingleIcon src="/react.png" size={240} left="12%" bottom="-40px" opacity={0.18} rotate={-3} dur="14s" delay="0s" />
        </div>
      </section>

      {/* Contact */}
      <ContactSection location={PROFILE.location} />

      {/* Back to Top */}
      <button
        onClick={handleBackToTop}
        aria-label="Back to top"
        title="Back to top"
        className={[
          "fixed right-4 md:right-6",
          "bottom-[max(1.5rem,env(safe-area-inset-bottom))]",
          "h-11 w-11 rounded-full",
          "bg-indigo-600 text-white shadow-lg",
          "hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600",
          "transition-opacity",
          showTop ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 15l7-7 7 7"/></svg>
      </button>

      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href={PROFILE.socials.instagram} target="_blank" className="hover:text-slate-800 dark:hover:text-slate-200" rel="noreferrer">Instagram</a>
            <span>•</span>
            <a href={PROFILE.socials.x} target="_blank" className="hover:text-slate-800 dark:hover:text-slate-200" rel="noreferrer">X</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ====== VIDEO CAROUSEL (click-to-play, mobile friendly) ====== */
function VideoCarouselSection({ videos = [] }) {
  const trackRef = useRef(null);
  const videoEls = useRef({});
  const [page, setPage] = useState(0);
  const [playingId, setPlayingId] = useState(null);

  const perView = 1;
  const pageCount = Math.max(1, Math.ceil(videos.length / perView));

  const pauseAll = () => {
    Object.values(videoEls.current).forEach((v) => {
      try {
        v?.pause?.();
      } catch (e) {
        // ignore harmless pause errors
        // eslint-disable-next-line no-unused-expressions
        e;
      }
    });
    setPlayingId(null);
  };

  const go = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    pauseAll();
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setPage(idx);
    pauseAll();
  };

  const handlePlayClick = (id) => {
    const v = videoEls.current[id];
    if (!v) return;
    pauseAll();
    try {
      v.muted = false;
      v.volume = 1;
      v.play();
      setPlayingId(id);
    } catch (e) {
      console.warn(e);
    }
  };

  const handleVideoClick = (id) => {
    const v = videoEls.current[id];
    if (!v) return;
    if (v.paused) handlePlayClick(id);
    else {
      v.pause();
      setPlayingId(null);
    }
  };

  return (
    <section className="scroll-mt-24 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Video Highlights</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-3xl">
            Created product videos for Flashklik—built to demo features, spark engagement, and drive conversion.
          </p>
        </div>

        <div className="relative">
          {/* arrows */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous videos"
            className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 backdrop-blur items-center justify-center hover:shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next videos"
            className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 backdrop-blur items-center justify-center hover:shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* track */}
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-1 sm:px-0"
            style={{ scrollSnapStop: "always" }}
          >
            <div className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[96%] gap-6 md:gap-8">
              {videos.map((v) => (
                <article
                  key={v.id}
                  className="relative snap-start rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-800 bg-black"
                >
                  {/* MOBILE: aspect 16:9, DESKTOP: banner fixed height */}
                  <div
                    className="
                      relative w-full
                      aspect-[16/9]
                      md:aspect-auto md:h-[520px]
                      lg:h-[560px]
                      bg-black
                    "
                    onClick={() => handleVideoClick(v.id)}
                  >
                    <video
                      ref={(el) => (videoEls.current[v.id] = el)}
                      src={v.src}
                      muted={false}
                      loop
                      playsInline
                      controls={false}
                      disablePictureInPicture
                      disableRemotePlayback
                      controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                      className="
                        absolute inset-0 h-full w-full
                        object-contain md:object-cover
                      "
                      preload="metadata"
                    />
                  </div>

                  {/* overlay text */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute left-6 right-6 bottom-6">
                      <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-white/85 text-base md:text-lg drop-shadow">
                        {v.desc}
                      </p>
                    </div>
                  </div>

                  {/* Play button */}
                  {playingId !== v.id && (
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePlayClick(v.id); }}
                      className="absolute inset-0 grid place-items-center"
                      aria-label={`Play ${v.title}`}
                    >
                      <span className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 backdrop-blur grid place-items-center shadow hover:scale-105 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* dots */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <span
                key={i}
                className={cx(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  i === page ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-600"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====== PROJECT BANNER (vertical, same size as video, with reveal) ====== */
function ProjectBanner({ p }) {
  const [revealRef, inView] = useInView({ root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 });
  const [zoomRef, progress] = useScrollZoom();

  // scale dari 0.96 (saat jauh) ke 1.04 (saat di tengah). Silakan ubah range 0.96–1.04 sesuai selera
  const scale = 0.96 + 0.08 * progress;

  return (
    <article
      ref={(el) => {
        revealRef.current = el;
        zoomRef.current = el;
      }}
      className={[
        "relative rounded-[32px] overflow-hidden border border-slate-200 dark:border-slate-800",
        "bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow",
        "will-change-transform",
      ].join(" ")}
      style={{
        opacity: inView ? 1 : 0,
        transform: `translateY(${inView ? 0 : 24}px) scale(${scale.toFixed(3)})`,
        transition:
          "opacity 900ms cubic-bezier(.2,.65,.2,1), transform 600ms cubic-bezier(.2,.65,.2,1)",
      }}
    >
      <a href={p.link} target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
        {/* ukuran sama seperti video: 16:9 di mobile, fixed height di md+ */}
        <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-[520px] lg:h-[560px]">
          <img
            src={p.cover}
            alt={p.title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute left-6 right-6 bottom-6">
            <div className="flex items-center gap-2 mb-2">
              {p.tags?.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-white/15 text-white ring-1 ring-white/20 backdrop-blur"
                >
                  {t}
                </span>
              ))}
              <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-white/15 text-white ring-1 ring-white/20 backdrop-blur">
                {p.year}
              </span>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow">
              {p.title}
            </h3>
            <p className="mt-2 text-white/85 text-base md:text-lg drop-shadow">
              {p.description}
            </p>
          </div>
        </div>
      </a>
    </article>
  );
}


/* ====== ABOUT (reveal + glass overlay) ====== */
function AboutShowcase() {
  const [imgRef, inView] = useInView();

  return (
    <section id="about" className="relative scroll-mt-24 py-16 md:py-24 bg-black text-slate-100 overflow-visible">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid grid-cols-12
            gap-y-16 md:gap-y-10
            gap-x-6 md:gap-x-16 lg:gap-x-24
            items-start md:items-center
            justify-items-center md:justify-items-start
          "
        >
          <div className="col-span-12 md:col-span-7 relative z-20">
            <h2 className="text-[clamp(30px,6vw,56px)] leading-[1.15] md:leading-[1.15] font-extrabold tracking-tight">
              
              <span className="text-slate-300">
                <span className="text-white"> WEB </span> & <span className="text-white"> MOBILE </span>
                <br className="hidden md:block" />
                <span className="design-anim">DESIGN</span>
                <span className="text-white"> EXPERT </span>
              </span>
              <div className="mt-4 flex items-center gap-3 text-sm">
  <span className="text-slate-400/90 font-medium">Location</span>
  <div className="h-px flex-1 bg-slate-200/70 dark:bg-white/10" />
  <span
  className="inline-flex items-center gap-2 px-3 py-1 rounded-full
             bg-slate-900/5 dark:bg-white/10 ring-1 ring-slate-200/70 dark:ring-white/10
             text-slate-500 dark:text-slate-300 font-mono text-[12px] sm:text-[13px] tracking-tight">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>
  {PROFILE.location}
</span>

</div>

            </h2>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="relative overflow-visible max-w-[420px] mx-auto md:mx-0 md:-ml-12 lg:-ml-20 -mt-4 md:-mt-8 z-10 pb-8 md:pb-0">
              <div
                ref={(el) => (imgRef.current = el)}
                className={[
                  "relative rounded-full overflow-hidden ring-1 ring-white/10 bg-white/5",
                  "h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px]",
                  "transition-all duration-[900ms] ease-[cubic-bezier(.2,.65,.2,1)] will-change-transform",
                  inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[1.03]",
                ].join(" ")}
              >
                <img src="/pp.png" alt="About William" className="h-full w-full object-cover object-[50%_22%] md:object-[50%_28%] filter grayscale" />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-overlay"
                  style={{
                    opacity: 0.35,
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.5'/></svg>\")",
                    backgroundSize: "160px 160px",
                  }}
                />
              </div>
              <div className="absolute left-3 right-3 -bottom-6 sm:left-4 sm:right-4 sm:-bottom-8 md:left-6 md:right-6 md:-bottom-10 z-20">
                <div className="backdrop-blur-xl backdrop-saturate-150 bg-black/55 text-white rounded-2xl ring-1 ring-white/20 p-3 sm:p-4 md:p-5 shadow-[0_12px_36px_rgba(0,0,0,.55)]">
                  <p className="text-[13px] sm:text-sm md:text-base leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,.6)]">
                    Specialized in intuitive, efficient, and engaging product design with seamless functionality for measurable business results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end col */}
        </div>
      </div>
    </section>
  );
}

/* ====== SMALL COMPONENTS, STACKS & CONTACT ====== */
function TextBelt({ items = ["Website Design","Mobile Design","UI/UX","Prototyping","Design Systems"], speed = 22, reverse = false, emphasis = "indigo", className = "" }) {
  const row = [...items, ...items, ...items];
  const color = emphasis === "indigo" ? "text-indigo-400 dark:text-indigo-300" : "text-slate-500 dark:text-slate-400";
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/50 dark:bg-white/5 backdrop-blur skill-belt-mask ${className}`}>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-indigo-500/0" />
      <div
        className="skill-belt-track flex gap-8 sm:gap-10 whitespace-nowrap px-4 sm:px-6 py-3"
        style={{ ["--speed"]: `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {row.map((t, i) => (
          <span key={i} className={`inline-flex items-center gap-3 font-extrabold tracking-tight text-xl sm:text-2xl md:text-4xl ${color}`}>
            <span className="h-2 w-2 rounded-full bg-current/70 shadow-[0_0_18px_currentColor]" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SingleIcon({ src, size = 160, left, top, bottom, right, opacity = 0.22, rotate = 0, delay = "0s", dur = "12s" }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="bg-icon hidden sm:block"
      style={{
        position: "absolute",
        width: size,
        height: size,
        left,
        top,
        right,
        bottom,
        opacity,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
        ["--dur"]: dur,
        ["--delay"]: delay,
        pointerEvents: "none",
      }}
    />
  );
}

function StackCard({ item }) {
  const fallback = (item?.name || "?")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-slate-200/10 bg-slate-900/50 px-4 py-3 hover:bg-slate-900/70 transition-colors dark:border-slate-800/50 w-full"
    >
      <div className="h-10 w-10 grid place-items-center rounded-lg bg-slate-800/60 ring-1 ring-slate-700/60 overflow-hidden">
        {item.logo ? <img src={item.logo} alt={item.name} className="h-6 w-6 object-contain" /> : <span className="text-[10px] font-bold text-slate-200">{fallback}</span>}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-slate-100 leading-tight truncate text-[15px] md:text-base">{item.name}</p>
        <p className="mt-[6px] font-mono text-[12px] text-slate-400/90 truncate tracking-tight">{item.role}</p>
      </div>
    </a>
  );
}

function StacksSection() {
  const left = STACKS.slice(0, 3);
  const right = STACKS.slice(3, 6);
  return (
    <section id="stacks" className="scroll-mt-24 py-16 md:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">My Stacks</h2>
        <p className="mt-4 text-slate-400 max-w-3xl">Commitment to staying updated with the latest design trends and techniques.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-3">{left.map((s) => <StackCard key={s.name} item={s} />)}</div>
          <div className="space-y-3">{right.map((s) => <StackCard key={s.name} item={s} />)}</div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ location }) {
  const WA_PHONE = "6281546845281";
  const preset = "Hi William, I came from your portfolio and would like to discuss a project.";
  const waLink = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(preset)}`;
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto mb-6 h-12 w-12 rounded-lg grid place-items-center bg-slate-900/5 dark:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700 dark:text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l9-7 9 7v8a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-4H10v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z" /></svg>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Get in Touch</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          I help companies and businesses turn goals into measurable growth, design that lifts conversion, speeds adoption, and streamlines operations. Let’s talk about your website, product, or design needs.
        </p>
        {location && <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Based in {location}</p>}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 text-white px-6 py-3 font-semibold hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 dark:bg-indigo-600 dark:hover:bg-indigo-500 w-full sm:w-auto"
        >
          Contact me on WhatsApp
          <span className="inline-grid h-8 w-8 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </span>
        </a>
      </div>
    </section>
  );
}
