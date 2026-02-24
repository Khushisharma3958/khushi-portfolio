'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import {
  BarChart3,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MoonStar,
  Sparkles,
  Sun,
  X
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { ScrollReveal } from '@/components/scroll-reveal';
import { ScrollTopButton } from '@/components/scroll-top';
import { SectionHeading } from '@/components/section-heading';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Analytics', 'Case Study', 'Blog', 'Experience', 'Contact'];
const titleText = 'Data Analyst | Web Developer';

type Category = 'All' | 'Data Analytics' | 'Web Development';

const projects = [
  {
    title: 'Emergency Room Data Analytics Dashboard',
    category: 'Data Analytics' as Category,
    tech: ['Power BI', 'Excel', 'DAX'],
    description: 'Interactive dashboard tracking patient volume and doctor performance to boost operational efficiency.',
    live: '#',
    github: '#',
    image: '/projects/er-dashboard.svg',
    caseStudy: {
      problem: 'Hospital operations lacked visibility into peak loads and doctor utilization.',
      approach: 'Built a layered BI model with cleaned source sheets, calculated DAX KPIs, and interactive slicers.',
      tools: 'Power BI, Excel, DAX',
      results: 'Reduced reporting delays and improved department planning efficiency by 20%.'
    }
  },
  {
    title: 'Innovare Venture Website',
    category: 'Web Development' as Category,
    tech: ['WordPress', 'SEO', 'Responsive UI'],
    description: 'Corporate website with conversion-friendly layout, responsive pages, and SEO structured content.',
    live: 'https://innovareventure.in',
    github: '#',
    image: '/projects/innovare.svg',
    caseStudy: {
      problem: 'Client needed a professional digital presence to improve trust and lead capture.',
      approach: 'Designed information architecture, implemented fast WordPress templates, and optimized metadata.',
      tools: 'WordPress, Yoast SEO, CSS',
      results: 'Increased visibility and improved engagement through clear calls to action.'
    }
  },
  {
    title: 'Travel Booking Website',
    category: 'Web Development' as Category,
    tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
    description: 'Full-stack booking workflow with admin panel, database-backed reservations, and dashboard views.',
    live: '#',
    github: '#',
    image: '/projects/travel.svg',
    caseStudy: {
      problem: 'Manual booking operations created delays and booking conflicts.',
      approach: 'Developed database schema, booking logic, and role-based admin management.',
      tools: 'PHP, MySQL, Bootstrap',
      results: 'Streamlined booking processing and improved reservation accuracy.'
    }
  },
  {
    title: 'Personal Portfolio',
    category: 'Web Development' as Category,
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    description: 'Modern personal portfolio focused on recruiter readability and performance.',
    live: '#home',
    github: '#',
    image: '/projects/portfolio.svg',
    caseStudy: {
      problem: 'Needed a modern brand identity with clear analytics + web profile positioning.',
      approach: 'Created structured sections, reusable components, and dark-first design system.',
      tools: 'Next.js, Tailwind CSS, TypeScript',
      results: 'Improved professional visibility with a polished, responsive portfolio experience.'
    }
  }
];

const services = [
  'Data Dashboard Development',
  'Business KPI Analysis',
  'Responsive Website Development',
  'Performance & SEO Optimization'
];

const timeline = [
  {
    period: 'Feb 2026 – Present',
    role: 'Web Developer',
    company: 'Arkose Infosoft Pvt Ltd',
    points: [
      'Built responsive websites and client landing pages',
      'Handled deployment, customization, and quality improvements',
      'Optimized front-end performance and SEO basics',
      'Collaborated with clients for requirement gathering and delivery'
    ]
  }
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full glass" />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="glass rounded-full p-2 transition hover:scale-105"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? <Sun size={18} /> : <MoonStar size={18} />}
    </button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [typed, setTyped] = useState('');
  const [filter, setFilter] = useState<Category>('All');
  const [activeCaseStudy, setActiveCaseStudy] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTyped(titleText.slice(0, index + 1));
      index += 1;
      if (index === titleText.length) clearInterval(timer);
    }, 85);

    return () => clearInterval(timer);
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative overflow-x-hidden">
      <div className="animated-grid pointer-events-none fixed inset-0 -z-10" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md light:bg-white/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#home" className="text-xl font-semibold tracking-tight">
            Khushi
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-cyan-400">
                {link}
              </a>
            ))}
            <a href="/resume.pdf" download className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-white">
              Resume
            </a>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button onClick={() => setMenuOpen((v) => !v)} className="glass rounded-full p-2" aria-label="Menu">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="glass mx-4 mb-3 rounded-2xl p-3 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-2 hover:bg-white/10"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            <CheckCircle2 size={14} /> Open for Opportunities
          </p>
          <h1 className="mb-2 text-4xl font-bold md:text-6xl">Khushi Sharma</h1>
          <h2 className="mb-4 h-8 text-xl font-semibold text-cyan-300 md:text-2xl">{typed}<span className="animate-pulse">|</span></h2>
          <p className="mb-8 max-w-xl text-slate-300 light:text-slate-700">
            Turning data into insights and ideas into digital solutions.
          </p>
          <div className="mb-7 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-cyan-500 px-6 py-3 font-medium text-white hover:bg-cyan-400">
              View Projects
            </a>
            <a href="#contact" className="glass rounded-full px-6 py-3 font-medium">
              Hire Me
            </a>
            <a href="/resume.pdf" download className="glass rounded-full px-6 py-3 font-medium">
              Download Resume
            </a>
          </div>
          <div className="flex gap-4">
            <Link href="https://linkedin.com" className="glass rounded-full p-3" aria-label="LinkedIn profile">
              <Linkedin size={18} />
            </Link>
            <Link href="https://github.com" className="glass rounded-full p-3" aria-label="GitHub profile">
              <Github size={18} />
            </Link>
            <Link href="mailto:itshkushisharma@gmail.com" className="glass rounded-full p-3" aria-label="Send email">
              <Mail size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="relative mx-auto">
          <div className="absolute -inset-6 -z-10 rounded-full bg-cyan-500/20 blur-3xl" />
          <Image src="/profile.svg" alt="Khushi Sharma profile portrait" width={360} height={360} className="glass rounded-[2rem] p-2" priority />
        </motion.div>
      </section>

      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section id="about">
          <SectionHeading
            title="About"
            subtitle="A results-focused analyst and developer blending business storytelling with technical execution."
            icon={<Sparkles size={14} />}
          />
          <div className="grid gap-6 md:grid-cols-[1.1fr_1fr]">
            <div className="glass rounded-2xl p-6">
              <p className="mb-4 leading-relaxed text-slate-300 light:text-slate-700">
                I started my journey by solving business reporting challenges and gradually expanded into building polished web products. My core focus is Data Analytics, where I use SQL, Python, Excel and Power BI to convert raw data into strategic decisions.
              </p>
              <p className="leading-relaxed text-slate-300 light:text-slate-700">
                At Arkose Infosoft, I work across analytics and web delivery—combining clean interfaces with meaningful business KPIs and measurable outcomes.
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <Image src="/about-photo.svg" alt="Khushi Sharma working professionally" width={420} height={280} className="mb-4 w-full rounded-xl object-cover" />
              <div className="grid gap-3 sm:grid-cols-3">
                {['5+ Projects', '1+ Year Experience', '100% Client Satisfaction'].map((item) => (
                  <div key={item} className="rounded-xl bg-white/5 p-3 text-center text-sm font-semibold">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section id="skills">
          <SectionHeading
            title="Skills"
            subtitle="Tools and technologies used to deliver clean analytics workflows and modern web products."
            icon={<Code2 size={14} />}
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <h4 className="mb-4 flex items-center gap-2 text-xl font-semibold"><Database size={20} />Data Analyst</h4>
              <div className="space-y-3">
                {['Excel', 'SQL', 'Python (NumPy, Pandas)', 'Power BI', 'Data Cleaning', 'DAX'].map((skill) => (
                  <div key={skill} className="rounded-xl bg-white/5 p-3 transition hover:-translate-y-1 hover:bg-cyan-500/10">{skill}</div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <h4 className="mb-4 flex items-center gap-2 text-xl font-semibold"><Code2 size={20} />Web Development</h4>
              <div className="space-y-3">
                {['HTML', 'CSS', 'JavaScript', 'Tailwind', 'React', 'WordPress', 'MySQL'].map((skill) => (
                  <div key={skill} className="rounded-xl bg-white/5 p-3 transition hover:-translate-y-1 hover:bg-cyan-500/10">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section id="projects">
          <SectionHeading
            title="Projects"
            subtitle="Selected case-based work across analytics and web development with live demos and technical breakdowns."
            icon={<Briefcase size={14} />}
          />

          <div className="mb-6 flex flex-wrap gap-2">
            {(['All', 'Data Analytics', 'Web Development'] as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-4 py-2 text-sm ${filter === category ? 'bg-cyan-500 text-white' : 'glass'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article key={project.title} className="glass group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="relative h-48 overflow-hidden">
                  <Image src={project.image} alt={`${project.title} screenshot`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="space-y-3 p-5">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="text-sm text-slate-300 light:text-slate-700">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((badge) => (
                      <span key={badge} className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">{badge}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <Link href={project.live} className="inline-flex items-center gap-1 rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-white">
                      Live <ExternalLink size={14} />
                    </Link>
                    <Link href={project.github} className="glass inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium">
                      GitHub <Github size={14} />
                    </Link>
                    <button onClick={() => setActiveCaseStudy(project)} className="glass inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium">
                      Case Study <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section id="analytics">
          <SectionHeading
            title="Data Analyst Focus"
            subtitle="A closer look at KPI design, data cleaning methodology, and BI storytelling for business decisions."
            icon={<BarChart3 size={14} />}
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <Image src="/projects/kpi-dashboard.svg" alt="Dashboard screenshot with KPIs" width={640} height={360} className="mb-4 w-full rounded-xl" />
              <p className="text-sm text-slate-300 light:text-slate-700">
                KPI focus: patient throughput, average wait time, resource utilization, and doctor efficiency. Each KPI was modeled for actionable executive dashboards.
              </p>
            </div>
            <div className="glass space-y-4 rounded-2xl p-6 text-slate-300 light:text-slate-700">
              <p><strong>Projects:</strong> SQL audit reports, Python data profiling notebooks, and Power BI executive dashboards.</p>
              <p><strong>Data cleaning:</strong> standardized null handling, duplicate elimination, column normalization, and robust type validation before visualization.</p>
              <p><strong>Business insights:</strong> identified peak demand windows, bottlenecks, and staffing adjustment opportunities to reduce process delays.</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section id="case-study">
          <SectionHeading
            title="Featured Case Study"
            subtitle="Detailed structured framework used for analytics delivery and business impact reporting."
            icon={<Database size={14} />}
          />
          <div className="glass grid gap-4 rounded-2xl p-6 md:grid-cols-2">
            {[
              ['Problem', 'Fragmented operational data made trend analysis and decision speed difficult.'],
              ['Data Used', 'Patient records, doctor performance tables, shift logs, and departmental volumes.'],
              ['Tools Used', 'SQL, Excel, Python, Power BI, DAX.'],
              ['Process', 'Collection → cleaning → transformation → KPI modeling → dashboard storytelling.'],
              ['Insights', 'Top delays were tied to handoff timings and high-volume intervals.'],
              ['Business Impact', 'Improved planning confidence and faster stakeholder reporting cycles.']
            ].map(([label, content]) => (
              <div key={label} className="rounded-xl bg-white/5 p-4">
                <p className="mb-1 font-semibold text-cyan-300">{label}</p>
                <p className="text-sm text-slate-300 light:text-slate-700">{content}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section id="blog">
          <SectionHeading
            title="Blog"
            subtitle="Practical learning notes for recruiters and teams to evaluate communication and technical depth."
            icon={<Sparkles size={14} />}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              'Data Cleaning Guide',
              'SQL for Beginners',
              'Dashboard Design Tips'
            ].map((post) => (
              <article key={post} className="glass rounded-2xl p-5 transition hover:-translate-y-1">
                <h4 className="mb-3 text-lg font-semibold">{post}</h4>
                <p className="mb-4 text-sm text-slate-300 light:text-slate-700">A concise practical guide with examples and implementation-focused recommendations.</p>
                <button className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-300">
                  Read article <ChevronRight size={14} />
                </button>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section id="experience">
          <SectionHeading
            title="Recruiter Snapshot"
            subtitle="Timeline, services, technology stack, and current availability for collaborations."
            icon={<Briefcase size={14} />}
          />
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="glass rounded-2xl p-6">
              <h4 className="mb-4 text-xl font-semibold">Experience Timeline</h4>
              {timeline.map((item) => (
                <div key={item.period} className="border-l border-cyan-400/40 pl-4">
                  <p className="text-sm text-cyan-300">{item.period}</p>
                  <p className="font-semibold">{item.role} · {item.company}</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-300 light:text-slate-700">
                    {item.points.map((point) => (<li key={point}>• {point}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h4 className="mb-3 text-lg font-semibold">Services Offered</h4>
                <ul className="space-y-2 text-sm text-slate-300 light:text-slate-700">
                  {services.map((service) => (<li key={service}>• {service}</li>))}
                </ul>
              </div>
              <div className="glass rounded-2xl p-6">
                <h4 className="mb-3 text-lg font-semibold">Tools & Technologies</h4>
                <p className="text-sm text-slate-300 light:text-slate-700">Power BI, SQL, Python, Excel, Next.js, React, Tailwind CSS, WordPress, MySQL.</p>
                <p className="mt-3 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
                  Available for full-time and freelance roles
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section id="contact">
          <SectionHeading
            title="Contact"
            subtitle="Let’s collaborate on analytics, dashboarding, or scalable web solutions."
            icon={<Mail size={14} />}
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <p className="mb-4 flex items-center gap-2"><Mail size={18} /> itshkushisharma@gmail.com</p>
              <p className="mb-4 flex items-center gap-2"><MapPin size={18} /> Kanpur, Uttar Pradesh</p>
              <p className="text-sm text-slate-300 light:text-slate-700">Typically responds within 24 hours.</p>
            </div>
            <form
              className="glass space-y-4 rounded-2xl p-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input required placeholder="Name" className="w-full rounded-xl bg-white/10 p-3 outline-none" />
              <input required type="email" placeholder="Email" className="w-full rounded-xl bg-white/10 p-3 outline-none" />
              <textarea required placeholder="Message" rows={4} className="w-full rounded-xl bg-white/10 p-3 outline-none" />
              <button className="w-full rounded-xl bg-cyan-500 py-3 font-medium text-white">Send Message</button>
              {submitted && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400">
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </div>
        </section>
      </ScrollReveal>

      <footer className="mt-12 border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-400 md:flex-row md:px-6">
          <p>© 2026 Khushi Sharma</p>
          <p>Built with Next.js & Tailwind</p>
          <div className="flex gap-3">
            <Link href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={16} /></Link>
            <Link href="https://github.com" aria-label="GitHub"><Github size={16} /></Link>
            <Mail size={16} />
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} className="glass relative w-full max-w-xl rounded-2xl p-6">
              <button onClick={() => setActiveCaseStudy(null)} className="absolute right-4 top-4 rounded-full bg-white/10 p-2" aria-label="Close case study">
                <X size={16} />
              </button>
              <h4 className="mb-4 text-2xl font-semibold">{activeCaseStudy.title}</h4>
              <div className="space-y-3 text-sm text-slate-300 light:text-slate-700">
                <p><strong className="text-cyan-300">Problem:</strong> {activeCaseStudy.caseStudy.problem}</p>
                <p><strong className="text-cyan-300">Approach:</strong> {activeCaseStudy.caseStudy.approach}</p>
                <p><strong className="text-cyan-300">Tools:</strong> {activeCaseStudy.caseStudy.tools}</p>
                <p><strong className="text-cyan-300">Results:</strong> {activeCaseStudy.caseStudy.results}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollTopButton />
    </motion.main>
  );
}
