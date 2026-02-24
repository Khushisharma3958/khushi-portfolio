'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Briefcase,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { ScrollReveal } from '@/components/scroll-reveal';
import { ScrollTopButton } from '@/components/scroll-top';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

const projects = [
  {
    title: 'Emergency Room Data Analytics Dashboard',
    tech: 'Power BI, Excel',
    description:
      'Built interactive dashboard tracking patient volume and doctor performance improving efficiency by 20%.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1100&q=80'
  },
  {
    title: 'Innovare Venture Website',
    tech: 'WordPress',
    description:
      'Designed and deployed business website with responsive UI and SEO optimization.',
    link: 'https://innovareventure.in',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1100&q=80'
  },
  {
    title: 'Travel Booking Website',
    tech: 'HTML, CSS, Bootstrap, PHP, MySQL',
    description:
      'Developed full-stack booking platform with admin panel and database.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1100&q=80'
  },
  {
    title: 'Personal Portfolio',
    tech: 'Next.js, Tailwind',
    description: 'Modern portfolio built using advanced tech stack.',
    link: '#home',
    image:
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1100&q=80'
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.2),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_40%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md light:bg-white/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#home" className="text-xl font-semibold tracking-tight">
            Khushi
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm hover:text-cyan-400">
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
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-2 hover:bg-white/10"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="mx-auto grid min-h-[90vh] max-w-6xl place-items-center px-4 py-20 md:px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-cyan-400">Hello, I'm</p>
          <h1 className="mb-2 text-4xl font-bold md:text-6xl">Khushi Sharma</h1>
          <h2 className="gradient-text mb-4 text-xl font-semibold md:text-2xl">Data Analyst | Web Developer</h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-300 light:text-slate-700">
            I build data-driven solutions and modern web applications that solve real-world problems.
          </p>
          <div className="mb-7 flex flex-wrap justify-center gap-3">
            <a href="#projects" className="rounded-full bg-cyan-500 px-6 py-3 font-medium text-white hover:bg-cyan-400">
              View Projects
            </a>
            <a href="/resume.pdf" download className="glass rounded-full px-6 py-3 font-medium">
              Download Resume
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <Link href="https://linkedin.com" className="glass rounded-full p-3" aria-label="LinkedIn">
              <Linkedin size={18} />
            </Link>
            <Link href="https://github.com" className="glass rounded-full p-3" aria-label="GitHub">
              <Github size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 md:px-6" >
        <section id="about">
          <h3 className="mb-6 text-3xl font-semibold">About</h3>
          <p className="mb-8 leading-relaxed text-slate-300 light:text-slate-700">
            I am a results-focused professional skilled in Excel, SQL, Python, Power BI, HTML, CSS,
            JavaScript and WordPress, with hands-on experience delivering impactful web and data
            solutions at Arkose Infosoft.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {['5+ Projects', '1+ Year Experience', '100% Client Satisfaction'].map((item) => (
              <div key={item} className="glass rounded-2xl p-5 text-center">
                <p className="text-xl font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section id="skills">
          <h3 className="mb-6 text-3xl font-semibold">Skills</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <h4 className="mb-4 flex items-center gap-2 text-xl font-semibold"><Database size={20} />Data Analyst</h4>
              <div className="space-y-3">
                {['Excel', 'SQL', 'Python (NumPy, Pandas)', 'Power BI', 'Data Cleaning', 'DAX'].map((skill) => (
                  <div key={skill} className="rounded-xl bg-white/5 p-3">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <h4 className="mb-4 flex items-center gap-2 text-xl font-semibold"><Code2 size={20} />Web Development</h4>
              <div className="space-y-3">
                {['HTML', 'CSS', 'JavaScript', 'Tailwind', 'React', 'WordPress', 'MySQL'].map((skill) => (
                  <div key={skill} className="rounded-xl bg-white/5 p-3">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section id="projects">
          <h3 className="mb-6 text-3xl font-semibold">Projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="glass group overflow-hidden rounded-2xl">
                <div className="relative h-48">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="space-y-3 p-5">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="text-sm text-cyan-400">{project.tech}</p>
                  <p className="text-slate-300 light:text-slate-700">{project.description}</p>
                  <Link href={project.link} className="inline-flex items-center gap-1 text-sm font-medium hover:text-cyan-400">
                    Live Link <ExternalLink size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section id="experience">
          <h3 className="mb-6 text-3xl font-semibold">Experience</h3>
          <div className="glass rounded-2xl p-6">
            <h4 className="text-xl font-semibold">Arkose Infosoft Pvt Ltd</h4>
            <p className="mb-4 text-cyan-400">Web Developer · Feb 2026 – Present</p>
            <ul className="space-y-2 text-slate-300 light:text-slate-700">
              <li>• Built responsive websites</li>
              <li>• Website deployment & customization</li>
              <li>• Performance optimization</li>
              <li>• Client collaboration</li>
            </ul>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section id="contact">
          <h3 className="mb-6 text-3xl font-semibold">Contact</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <p className="mb-4 flex items-center gap-2"><Mail size={18} /> itshkushisharma@gmail.com</p>
              <p className="flex items-center gap-2"><MapPin size={18} /> Kanpur, Uttar Pradesh</p>
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
            <Briefcase size={16} />
          </div>
        </div>
      </footer>

      <ScrollTopButton />
    </motion.main>
  );
}
