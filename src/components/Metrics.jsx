import { useInView } from '../hooks/useInView';

const metrics = [
  {
    value: '10,000+',
    label: 'Users Supported',
    sub: 'via Automation Systems',
  },
  {
    value: '35%',
    label: 'Reduction in Resolution Time',
    sub: 'Operational Performance',
  },
  {
    value: '25%',
    label: 'Increase in First-Contact Resolution',
    sub: 'Service Quality Improvement',
  },
  {
    value: 'Top 24%',
    label: 'Globally Ranked',
    sub: 'Kaggle BPM Competition',
  },
  {
    value: '10+',
    label: 'REST API Endpoints',
    sub: 'Designed & Deployed',
  },
  {
    value: '99.9%',
    label: 'Production Uptime',
    sub: 'PostPulse Application',
  },
];

export default function Metrics() {
  const [ref, inView] = useInView();

  return (
    <section className="py-24 bg-[#050505] border-t border-neutral-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-xs font-medium text-blue-400 tracking-[0.15em] uppercase mb-3">
            02 / Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-tight">
            Measurable Results
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800/30">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`bg-[#050505] p-8 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: inView ? `${i * 70}ms` : '0ms' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 tracking-tight">
                {m.value}
              </div>
              <div className="text-sm font-medium text-neutral-200 mb-1">{m.label}</div>
              <div className="text-xs text-neutral-400">{m.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
