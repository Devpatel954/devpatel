import { useInView } from '../hooks/useInView';

const posts = [
  {
    title: 'Designing Production ML Pipelines',
    excerpt:
      'How to architect an end-to-end ML system that survives contact with real data — from ingestion and validation to inference and monitoring.',
    readTime: '8 min read',
    tag: 'Architecture',
  },
  {
    title: 'From Prototype to Deployment: Lessons from AWS',
    excerpt:
      'Moving beyond Jupyter notebooks — building reproducible, scalable ML workflows on AWS Elastic Beanstalk and S3.',
    readTime: '6 min read',
    tag: 'Cloud',
  },
  {
    title: 'Building AI Features into Full-Stack Systems',
    excerpt:
      'Integrating NLP and zero-shot classification models into production APIs without sacrificing latency or reliability.',
    readTime: '7 min read',
    tag: 'ML Engineering',
  },
  {
    title: 'Lessons from Kaggle Competitions',
    excerpt:
      'What ensemble models, feature engineering, and leaderboard pressure teach you about real production ML engineering.',
    readTime: '5 min read',
    tag: 'Machine Learning',
  },
];

export default function Blog() {
  const [ref, inView] = useInView();

  return (
    <section id="blog" className="py-24 border-t border-neutral-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-xs font-medium text-blue-400 tracking-[0.15em] uppercase mb-3">
            06 / Writing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-tight">
            Engineering Notes
          </h2>
          <p className="text-neutral-600 text-sm mt-3">
            Technical writing on production systems, ML engineering, and architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post, i) => (
            <article
              key={i}
              className={`bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-600 p-7 flex flex-col group cursor-pointer transition-all duration-500 hover:bg-[#0d0d0d] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: inView ? `${i * 80}ms` : '0ms' }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-medium text-neutral-600 border border-neutral-800 px-2.5 py-1 uppercase tracking-widest">
                  {post.tag}
                </span>
                <span className="text-[10px] text-neutral-700">{post.readTime}</span>
              </div>

              <h3 className="text-base font-semibold text-neutral-200 mb-3 group-hover:text-blue-300 transition-colors duration-200 leading-snug tracking-tight">
                {post.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed flex-1">{post.excerpt}</p>

              <div className="mt-6 flex items-center gap-2 text-[11px] text-neutral-700 group-hover:text-blue-500 transition-colors duration-200 uppercase tracking-widest">
                <span>Coming Soon</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
