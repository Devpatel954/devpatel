import { useInView } from '../hooks/useInView';

const links = [
  {
    label: 'Email',
    value: 'devp5340@gmail.com',
    href: 'mailto:devp5340@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/Devpatel954',
    href: 'https://github.com/Devpatel954',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/devpatel117',
    href: 'https://www.linkedin.com/in/devpatel117/',
  },
];

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className="py-24 border-t border-neutral-900 bg-[#050505]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl">

          <div
            className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-xs font-medium text-blue-400 tracking-[0.15em] uppercase mb-3">
              07 / Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-neutral-300 leading-relaxed text-[15px]">
              Open to full-time software engineering and machine learning engineering roles.
              Feel free to reach out directly.
            </p>
          </div>

          <div
            className={`space-y-3 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex items-center justify-between p-5 border border-neutral-800 hover:border-blue-500/50 group transition-all duration-200 hover:bg-[#080808]"
              >
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">
                    {link.label}
                  </p>
                  <p className="text-sm text-neutral-300 group-hover:text-blue-300 transition-colors duration-200">
                    {link.value}
                  </p>
                </div>
                <span className="text-neutral-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200 text-lg">
                  →
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
