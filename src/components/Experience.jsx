import { useInView } from '../hooks/useInView';

const bullets = [
  'Shipped full-stack internal automation and web platforms using React.js, FastAPI (Python), and SQL to streamline student and staff support workflows, improving average resolution time by 35%.',
  'Executed scalable backend services and reusable automation utilities for device provisioning, data validation, and operational workflows, saving 10+ hours per week across the support team.',
  'Improved system reliability and performance at scale by designing standardized workflows and API-driven processes supporting 10,000+ active users, increasing first-contact resolution by 25%.',
];

const techUsed = ['Python', 'JavaScript', 'FastAPI', 'REST APIs', 'Linux', 'Windows', 'macOS', 'Automation'];

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="py-24 border-t border-neutral-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-xs font-medium text-blue-400 tracking-[0.15em] uppercase mb-3">
            03 / Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-tight">
            Work Experience
          </h2>
        </div>

        <div
          className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="border border-neutral-800 hover:border-neutral-700 transition-colors duration-300 p-8 md:p-10">

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-neutral-100 mb-1 tracking-tight">
                  Full Stack Developer
                </h3>
                <p className="text-blue-400 font-medium text-sm mb-0.5">
                  UIC Technology Solutions
                </p>
                <p className="text-xs text-neutral-400 tracking-wide">
                  University of Illinois Chicago
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1.5">
                <span className="text-[11px] font-medium text-neutral-300 tracking-widest uppercase border border-neutral-800 bg-neutral-900/50 px-3 py-1.5">
                  2023 — 2025
                </span>
              
              </div>
            </div>

            <ul className="space-y-4">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex gap-4 text-sm text-neutral-200 leading-relaxed">
                  <span className="text-blue-600 flex-shrink-0 mt-0.5 font-medium">→</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-wrap gap-2">
              {techUsed.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] text-neutral-300 border border-neutral-800 px-2.5 py-1 bg-neutral-900/30"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
