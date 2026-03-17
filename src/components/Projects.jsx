import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    id: 1,
    title: 'Student Performance Prediction',
    subtitle: 'Production ML Pipeline',
    summary:
      'End-to-end machine learning pipeline forecasting academic performance with automated model training and cloud deployment.',
    architecture: [
      'Data Ingestion',
      'Validation',
      'Feature Engineering',
      'Model Training',
      'FastAPI Inference',
      'AWS Elastic Beanstalk',
      'S3 Artifacts',
    ],
    highlights: [
      'Fully automated ML workflow',
      'Scalable REST inference API',
      'Production deployment on AWS',
    ],
    stack: ['Python', 'FastAPI', 'Scikit-learn', 'AWS S3', 'Elastic Beanstalk'],
    category: 'ML',
    github: 'https://github.com/devpatel',
    demo: null,
  },
  {
    id: 2,
    title: 'Car Rental AI Booking Platform',
    subtitle: 'Full-Stack AI Application',
    summary:
      'Full-stack AI-powered booking system with recommendation engine using DistilBERT zero-shot classification.',
    architecture: [
      'React Frontend',
      'Node.js / Express',
      'MongoDB',
      'JWT Auth',
      'AI Recommendation Engine',
      'Vercel / Render',
    ],
    highlights: [
      '10+ REST API endpoints',
      'JWT authentication & role-based access',
      'DistilBERT zero-shot recommendation engine',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Hugging Face', 'Tailwind CSS'],
    category: 'Full-Stack',
    github: 'https://github.com/devpatel',
    demo: null,
  },
  {
    id: 3,
    title: 'Road Accident Risk Prediction',
    subtitle: 'Kaggle × StackOverflow',
    summary:
      'Classification model predicting roadway accident risk with interactive real-time human-vs-model comparison.',
    architecture: null,
    highlights: [
      '~0.55 ROC-AUC score',
      'Environmental & road-design feature engineering',
      "Interactive 'Pick the Safer Road' game",
    ],
    stack: ['Python', 'NumPy', 'Scikit-learn', 'Streamlit'],
    category: 'ML',
    github: 'https://github.com/devpatel',
    demo: null,
  },
  {
    id: 4,
    title: 'BPM Prediction',
    subtitle: 'Top 24% Globally — Kaggle',
    summary:
      'Regression pipeline predicting song tempo using ensemble models, achieving top 24% on the global leaderboard.',
    architecture: null,
    highlights: [
      'Top 24% globally on Kaggle',
      'Lasso, Random Forest, LightGBM, XGBoost ensemble',
      'Extensive cross-validation & hyperparameter tuning',
    ],
    stack: ['Python', 'LightGBM', 'XGBoost', 'Scikit-learn'],
    category: 'ML',
    github: 'https://github.com/devpatel',
    demo: null,
  },
  {
    id: 5,
    title: 'Customer Churn Prediction',
    subtitle: 'ANN — Deep Learning',
    summary:
      'Deep learning model predicting bank customer churn with 87% accuracy and 92% recall.',
    architecture: null,
    highlights: [
      '87% accuracy / 92% recall',
      'Addressed class imbalance',
      'Deployed interactive Streamlit app',
    ],
    stack: ['TensorFlow', 'Python', 'Streamlit'],
    category: 'ML',
    github: 'https://github.com/devpatel',
    demo: null,
  },
  {
    id: 6,
    title: 'Heart Disease Prediction',
    subtitle: 'Clinical Risk Classification',
    summary:
      'Logistic Regression system for cardiovascular risk detection achieving 95% accuracy on 300+ patient records.',
    architecture: null,
    highlights: [
      '95% accuracy / 93% precision',
      '300+ patient records',
      'Modular, reproducible architecture',
    ],
    stack: ['Python', 'Scikit-learn', 'Pandas'],
    category: 'ML',
    github: 'https://github.com/devpatel',
    demo: null,
  },
  {
    id: 7,
    title: 'PostPulse',
    subtitle: 'Production Flask Application',
    summary:
      'Production-grade Flask web application with secure authentication and 99.9% uptime on Render.',
    architecture: ['Flask Backend', 'Gunicorn WSGI', 'Tailwind UI', 'Render Deployment'],
    highlights: [
      '50% faster response time via Gunicorn',
      '99.9% production uptime',
      'Secure user authentication',
    ],
    stack: ['Flask', 'Python', 'Tailwind CSS', 'Gunicorn', 'Render'],
    category: 'Full-Stack',
    github: 'https://github.com/devpatel',
    demo: 'https://postpulse.onrender.com',
  },
  {
    id: 8,
    title: "Chess.com Clone",
    subtitle: 'Real-Time Multiplayer Platform',
    summary:
      'Real-time multiplayer chess platform with matchmaking algorithm reducing average wait time by 50%.',
    architecture: null,
    highlights: [
      '50% reduction in matchmaking wait time',
      '20% latency reduction',
      'Dynamic board rendering & secure auth',
    ],
    stack: ['JavaScript', 'Node.js', 'WebSockets', 'Express'],
    category: 'Full-Stack',
    github: 'https://github.com/devpatel',
    demo: null,
  },
  {
    id: 9,
    title: 'GetMyNewz',
    subtitle: 'News Aggregation Platform',
    summary:
      'Dynamic news aggregation platform with real-time API-driven content fetch and topic-based personalized filtering.',
    architecture: null,
    highlights: [
      'Real-time news fetch via external APIs',
      'Topic-based content filtering',
      'Personalized user interface',
    ],
    stack: ['React', 'JavaScript', 'REST APIs', 'Node.js'],
    category: 'Full-Stack',
    github: 'https://github.com/devpatel',
    demo: null,
  },
];

const categoryStyle = {
  ML: 'text-violet-400 bg-violet-400/8 border-violet-400/20',
  'Full-Stack': 'text-blue-400 bg-blue-400/8 border-blue-400/20',
};

function ProjectCard({ project, index, inView }) {
  return (
    <div
      className={`bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-600 p-6 flex flex-col group transition-all duration-500 hover:bg-[#0d0d0d] ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: inView ? `${index * 55}ms` : '0ms' }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <span
          className={`text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 border ${categoryStyle[project.category]}`}
        >
          {project.category}
        </span>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-neutral-600 hover:text-neutral-300 transition-colors uppercase tracking-widest"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-neutral-600 hover:text-neutral-300 transition-colors uppercase tracking-widest"
            >
              Live
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-semibold text-neutral-100 mb-1 group-hover:text-blue-300 transition-colors duration-200 leading-snug tracking-tight">
        {project.title}
      </h3>
      <p className="text-[11px] text-neutral-600 mb-3 tracking-wide uppercase">{project.subtitle}</p>

      {/* Summary */}
      <p className="text-sm text-neutral-500 leading-relaxed mb-4 flex-1">{project.summary}</p>

      {/* Architecture pipeline */}
      {project.architecture && (
        <div className="mb-4">
          <p className="text-[10px] text-neutral-700 uppercase tracking-widest mb-2">Pipeline</p>
          <div className="flex flex-wrap gap-1 items-center">
            {project.architecture.map((step, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="text-[10px] text-neutral-500 bg-neutral-900 border border-neutral-800 px-1.5 py-0.5">
                  {step}
                </span>
                {i < project.architecture.length - 1 && (
                  <span className="text-[10px] text-neutral-700">→</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Highlights */}
      <ul className="space-y-1 mb-4">
        {project.highlights.map((h, i) => (
          <li key={i} className="text-xs text-neutral-500 flex items-start gap-2">
            <span className="text-blue-700 flex-shrink-0 mt-0.5 font-bold">·</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div className="pt-4 border-t border-neutral-900 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[10px] text-neutral-600 px-2 py-0.5 bg-neutral-900 border border-neutral-800/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [ref, inView] = useInView();

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 border-t border-neutral-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div
          className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-xs font-medium text-blue-400 tracking-[0.15em] uppercase mb-3">
            04 / Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 tracking-tight">
            Selected Work
          </h2>
        </div>

        {/* Filter tabs */}
        <div
          className={`flex gap-2 mb-10 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {['All', 'ML', 'Full-Stack'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[11px] font-medium tracking-wide px-4 py-2 border transition-all duration-200 ${
                filter === cat
                  ? 'border-blue-500 text-blue-400 bg-blue-500/5'
                  : 'border-neutral-800 text-neutral-500 hover:border-neutral-700 hover:text-neutral-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
}
