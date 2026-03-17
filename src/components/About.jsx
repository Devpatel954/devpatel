import { useInView } from '../hooks/useInView';

const focusAreas = [
  'Production ML Systems',
  'High-Performance REST APIs',
  'Modular Backend Architecture',
  'Cloud Deployment & DevOps',
  'Scalable Automation Pipelines',
  'Applied ML with Measurable Metrics',
];

export default function About() {
  const [ref, inView] = useInView();

  const base = 'transition-all duration-700';
  const show = 'opacity-100 translate-y-0';
  const hide = 'opacity-0 translate-y-4';

  return (
    <section id="about" className="py-24 border-t border-neutral-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <div className={`mb-16 ${base} ${inView ? show : hide}`}>
          <p className="text-xs font-medium text-blue-400 tracking-[0.15em] uppercase mb-3">
            01 / About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-tight">
            About Dev
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Text — 3 cols */}
          <div
            className={`lg:col-span-3 space-y-5 ${base} delay-100 ${inView ? show : hide}`}
          >
            <p className="text-neutral-400 leading-relaxed text-[15px]">
              Dev Patel is a Software Engineer and Machine Learning Engineer graduating from
              the University of Illinois Chicago (Dec 2025). He specializes in
              production-grade AI/ML systems, backend architecture, and scalable automation.
            </p>
            <p className="text-neutral-400 leading-relaxed text-[15px]">
              At UIC Technology Solutions, Dev designs and deploys internal automation tools
              and lightweight web applications serving 10,000+ active users. His engineering
              contributions reduced operational resolution time by 35%, increased
              first-contact resolution by 25%, and eliminated 10+ hours of manual processes
              per week.
            </p>
            <p className="text-neutral-400 leading-relaxed text-[15px]">
              Beyond operational systems, Dev builds end-to-end machine learning pipelines —
              from data ingestion and feature engineering to model training, API deployment,
              and cloud scaling on AWS.
            </p>

            {/* Quote */}
            <blockquote className="mt-8 border-l-2 border-blue-500 pl-5">
              <p className="text-neutral-300 italic leading-relaxed text-[15px]">
                "I prioritize clean architecture, reproducible ML workflows, measurable
                performance improvements, and systems that scale beyond the prototype stage."
              </p>
              <footer className="text-xs text-neutral-600 mt-2 not-italic tracking-wide">
                — Engineering Philosophy
              </footer>
            </blockquote>
          </div>

          {/* Focus areas — 2 cols */}
          <div
            className={`lg:col-span-2 ${base} delay-200 ${inView ? show : hide}`}
          >
            <p className="text-[10px] font-medium text-neutral-600 tracking-[0.18em] uppercase mb-5">
              Focus Areas
            </p>
            <ul className="space-y-3.5">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-3 text-sm text-neutral-400">
                  <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-neutral-900 space-y-3">
              <div>
                <p className="text-[10px] text-neutral-700 uppercase tracking-widest mb-1">University</p>
                <p className="text-sm text-neutral-400">University of Illinois Chicago</p>
              </div>
              <div>
                <p className="text-[10px] text-neutral-700 uppercase tracking-widest mb-1">Graduation</p>
                <p className="text-sm text-neutral-400">December 2025</p>
              </div>
              <div>
                <p className="text-[10px] text-neutral-700 uppercase tracking-widest mb-1">Location</p>
                <p className="text-sm text-neutral-400">Chicago, Illinois</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
