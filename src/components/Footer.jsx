export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <p className="text-sm font-semibold text-neutral-200 tracking-[0.08em]">Dev Patel</p>
          <p className="text-xs text-neutral-600 mt-1">Building Intelligent Systems That Scale.</p>
        </div>

        <div className="flex items-center gap-7">
          <a
            href="https://github.com/Devpatel954"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-neutral-600 hover:text-neutral-300 transition-colors uppercase tracking-widest"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/devpatel117/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-neutral-600 hover:text-neutral-300 transition-colors uppercase tracking-widest"
          >
            LinkedIn
          </a>
          <a
            href="mailto:devp5340@gmail.com"
            className="text-[11px] text-neutral-600 hover:text-neutral-300 transition-colors uppercase tracking-widest"
          >
            Email
          </a>
        </div>

        <p className="text-[11px] text-neutral-700">
          &copy; {new Date().getFullYear()} Dev Patel
        </p>

      </div>
    </footer>
  );
}
