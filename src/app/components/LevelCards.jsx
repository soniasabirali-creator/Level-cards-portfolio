"use client";

import { useState } from "react";
import { Code2, Layers, Rocket, Check, ArrowRight } from "lucide-react";

const GOLD = "#c9a961";

const navLinks = ["Services", "Featured Work", "Reviews"];

const levels = [
  {
    num: "01",
    title: "Beginner",
    desc: "Learn HTML, CSS, JS basics",
    color: "#1f6f5c", // deep emerald
    Icon: Code2,
    rotate: "-9deg", // left card left ko jhukega
    lift: "14px",
  },
  {
    num: "02",
    title: "Intermediate",
    desc: "Build real projects with React",
    color: "#a67c2e", // antique gold
    Icon: Layers,
    rotate: "0deg", // beech wala seedha, thoda upar
    lift: "-18px",
  },
  {
    num: "03",
    title: "Advanced",
    desc: "Master Next.js & deployment",
    color: "#8c2f39", // burgundy
    Icon: Rocket,
    rotate: "9deg", // right card right ko jhukega
    lift: "14px",
  },
];

export default function LevelCards() {
  const [selected, setSelected] = useState(null);

  const handleContinue = () => {
    if (selected === null) return;
    // Yahan apna next step likhein, e.g. router.push("/portfolio")
    alert(`Selected: ${levels[selected].title}`);
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-16 overflow-hidden bg-[#0a0a0a] px-4 pb-20 pt-32">
      {/* Peechhe halki gold glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: `radial-gradient(circle, ${GOLD}, transparent 70%)` }}
      />

      {/* NAVBAR */}
      <nav className="animate-fade-up absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <span
          className="font-serif text-5xl italic tracking-wide"
          style={{ color: GOLD }}
        >
          Sonia.
        </span>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-[11px] uppercase tracking-[0.25em] text-white/60 transition-colors duration-300 hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.25em] transition-all duration-300 hover:bg-[#c9a961] hover:text-black"
          style={{ borderColor: GOLD, color: GOLD }}
        >
          Get in Touch
        </a>
      </nav>

      {/* Heading */}
      <div className="animate-fade-up relative text-center">
        <p
          className="mb-4 text-[11px] uppercase tracking-[0.4em]"
          style={{ color: GOLD }}
        >
          Step 01 &nbsp;·&nbsp; Your Path
        </p>
        <h2 className="font-serif text-3xl font-light tracking-wide text-white md:text-5xl">
          Where are you in{" "}
          <span className="italic" style={{ color: GOLD }}>
            your
          </span>{" "}
          journey?
        </h2>
        <div
          className="mx-auto mt-6 h-px w-16"
          style={{ backgroundColor: GOLD }}
        />
      </div>

      {/* Cards */}
      <div className="group/cards relative flex flex-wrap justify-center gap-8 [perspective:1400px]">
        {levels.map((l, i) => {
          const isSelected = selected === i;
          return (
            <button
              key={l.num}
              onClick={() => setSelected(i)}
              style={{ animationDelay: `${i * 150 + 300}ms` }}
              className="animate-fade-up h-80 w-56 cursor-pointer rounded-2xl [transform-style:preserve-3d] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4"
            >
              {/* 1) FAN WRAPPER: neeche ke point se tirchay hone ke liye */}
              <div
                style={{
                  "--r": l.rotate,
                  "--y": l.lift,
                  transitionDelay: `${i * 90}ms`,
                }}
                className="
                  h-full w-full origin-bottom
                  transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                  [transform-style:preserve-3d]
                  group-hover/cards:[transform:translateY(var(--y))_rotate(var(--r))]
                  motion-reduce:transition-none
                "
              >
                {/* 2) FLIP WRAPPER: palatne ke liye */}
                <div
                  style={{
                    transitionDelay: `${i * 90}ms`,
                    borderColor: isSelected ? GOLD : "transparent",
                    boxShadow: isSelected
                      ? `0 0 0 1px ${GOLD}, 0 0 30px -5px ${GOLD}`
                      : "none",
                  }}
                  className="
                    relative h-full w-full rounded-2xl border
                    transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                    [transform-style:preserve-3d]
                    group-hover/cards:[transform:rotateY(180deg)]
                    motion-reduce:transition-none
                  "
                >
                  {/* AAGE WALA SIDE */}
                  <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#161616] to-[#0d0d0d] p-7 text-left text-white [backface-visibility:hidden]">
                    <span className="pointer-events-none absolute -right-2 -top-4 font-serif text-[120px] font-light leading-none text-white/[0.04]">
                      {l.num}
                    </span>

                    <div className="relative flex w-full items-start justify-between">
                      <l.Icon size={26} strokeWidth={1.2} style={{ color: GOLD }} />
                      {isSelected && (
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded-full text-black"
                          style={{ backgroundColor: GOLD }}
                        >
                          <Check size={14} strokeWidth={3} />
                        </span>
                      )}
                    </div>

                    <div className="relative">
                      <div
                        className="mb-4 h-px w-8"
                        style={{ backgroundColor: GOLD }}
                      />
                      <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-white/40">
                        Level {l.num}
                      </span>
                      <h3 className="font-serif text-2xl font-light tracking-wide">
                        {l.title}
                      </h3>
                    </div>
                  </div>

                  {/* PEECHHE WALA SIDE */}
                  <div
                    className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl p-7 text-left text-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
                    style={{
                      background: `linear-gradient(160deg, ${l.color}, #0a0a0a 140%)`,
                      boxShadow: `0 30px 60px -20px ${l.color}`,
                    }}
                  >
                    <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/20" />

                    <div className="relative flex w-full items-start justify-between px-2 pt-2">
                      <l.Icon size={26} strokeWidth={1.2} />
                      {isSelected && (
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                          <Check size={14} strokeWidth={3} />
                        </span>
                      )}
                    </div>

                    <div className="relative px-2 pb-2">
                      <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-white/60">
                        Level {l.num}
                      </span>
                      <h3 className="font-serif text-2xl font-light tracking-wide">
                        {l.title}
                      </h3>
                      <p className="mt-3 text-sm font-light leading-relaxed text-white/80">
                        {l.desc}
                      </p>
                      <span className="mt-4 inline-block text-[10px] uppercase tracking-[0.3em] text-white/90">
                        {isSelected ? "— Selected —" : "Click to select"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Continue button */}
      <button
        onClick={handleContinue}
        disabled={selected === null}
        style={{ animationDelay: "800ms", borderColor: GOLD, color: GOLD }}
        className="
          animate-fade-up relative flex items-center gap-3
          rounded-full border px-10 py-3.5 text-xs uppercase tracking-[0.3em]
          transition-all duration-500
          hover:bg-[#c9a961] hover:text-black hover:gap-5
          disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#c9a961] disabled:hover:gap-3
        "
      >
        Continue <ArrowRight size={16} strokeWidth={1.5} />
      </button>
    </section>
  );
}