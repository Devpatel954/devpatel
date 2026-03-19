import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const visible = 'opacity-100 translate-y-0';
  const hidden = 'opacity-0 translate-y-4';

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">

        <div
          className={`transition-all duration-700 ${mounted ? visible : hidden}`}
        >
          <div className="inline-flex items-center gap-2.5 text-xs text-neutral-300 border border-neutral-700 rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available &mdash; Chicago, Illinois &nbsp;·&nbsp; Graduating December 2025
          </div>
        </div>

        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-100 leading-[1.04] tracking-[-0.02em] mb-6 transition-all duration-700 delay-100 ${mounted ? visible : hidden}`}
        >
          Engineering Intelligent<br />Systems at Scale.
        </h1>

        <p
          className={`text-lg md:text-xl text-neutral-200 max-w-2xl leading-relaxed mb-4 transition-all duration-700 delay-200 ${mounted ? visible : hidden}`}
        >
          Software Engineer &amp; Machine Learning Engineer focused on production AI systems,
          scalable backend architecture, and real-world automation.
        </p>

        <p
          className={`text-sm md:text-base text-neutral-300 max-w-2xl leading-relaxed mb-10 transition-all duration-700 delay-300 ${mounted ? visible : hidden}`}
        >
          I build end-to-end ML pipelines, high-performance APIs, and scalable automation
          systems that serve thousands of users. My work blends machine learning, backend
          engineering, and cloud infrastructure to deliver measurable impact.
        </p>

        <div
          className={`flex flex-wrap gap-3 transition-all duration-700 delay-500 ${mounted ? visible : hidden}`}
        >
          <a
            href="#projects"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors duration-200 tracking-wide"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:text-white text-sm font-medium transition-all duration-200 tracking-wide"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/Devpatel954"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-neutral-200 text-sm font-medium transition-all duration-200 tracking-wide"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/devpatel117/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-neutral-200 text-sm font-medium transition-all duration-200 tracking-wide"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-neutral-200 text-sm font-medium transition-all duration-200 tracking-wide"
          >
            Contact
          </a>
        </div>

        <div
          className={`mt-20 flex items-center gap-3 transition-all duration-700 delay-700 ${mounted ? visible : hidden}`}
        >
          <div className="w-6 h-px bg-neutral-700" />
          <span className="text-[10px] text-neutral-600 uppercase tracking-[0.18em]">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
