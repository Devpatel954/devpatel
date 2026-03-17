import { useInView } from '../hooks/useInView';

const skills = {
  Languages: ['Python', 'Java', 'C/C++', 'JavaScript', 'SQL', 'NoSQL (MongoDB)'],
  'Frameworks & Libraries': [
    'React',
    'Node.js',
    'Express',
    'FastAPI',
    'Scikit-learn',
    'TensorFlow',
    'PyTorch',
    'Pandas',
    'Matplotlib',
    'NumPy',
    'Seaborn',
    'Hugging Face Transformers',
  ],
  'Tools & Platforms': [
    'Git',
    'GitHub',
    'Docker',
    'Amazon Web Services',
    'Microsoft Azure',
    'VS Code',
    'Jupyter Notebook',
  ],
};

export default function TechStack() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-24 border-t border-neutral-900 bg-[#050505]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-xs font-medium text-blue-400 tracking-[0.15em] uppercase mb-3">
            05 / Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-tight">
            Technical Stack
          </h2>
        </div>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, techs], catIndex) => (
            <div
              key={category}
              className={`transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: inView ? `${catIndex * 100}ms` : '0ms' }}
            >
              <p className="text-[10px] font-medium text-neutral-600 tracking-[0.18em] uppercase mb-5">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-neutral-300 border border-neutral-800 px-3.5 py-1.5 hover:border-blue-500/40 hover:text-blue-300 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
