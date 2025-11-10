import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Mail, Linkedin, ChevronDown, Code, Palette, Zap } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b shadow-lg bg-white/80 backdrop-blur-lg border-white/20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text animate-pulse">
              Getrude Cheptoo
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden space-x-8 md:flex">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 transform hover:scale-105 ${
                    activeSection === section
                      ? 'text-purple-600 font-semibold border-b-2 border-purple-600'
                      : 'text-gray-700 hover:text-purple-600 hover:font-medium'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 transition-colors duration-300 hover:text-purple-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden animate-slide-down">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t rounded-b-lg bg-white/90 backdrop-blur-lg border-white/20">
                {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full px-3 py-2 text-left text-gray-700 capitalize transition-all duration-300 rounded-lg hover:text-purple-600 hover:bg-purple-50"
                  >
                    {section === 'hero' ? 'Home' : section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bg-purple-300 rounded-full -top-40 -right-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bg-blue-300 rounded-full -bottom-40 -left-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bg-teal-300 rounded-full top-40 left-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text">Getrude Cheptoo</span>
            </h1>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
              A passionate Fullstack Software Developer & <span className="font-semibold text-purple-600"> a Machine Learning Enthusiast</span>
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-400">
            <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-700">
              Building innovative and user-focused web applications with modern technologies
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center px-8 py-4 font-semibold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
            >
              View My Work
              <ChevronDown className="ml-2 animate-bounce" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-white to-blue-50">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 sm:text-4xl">
              About <span className="text-purple-600">Me</span>
            </h2>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="animate-fade-in-left">
              <div className="prose prose-lg text-gray-700">
                <p className="text-lg leading-relaxed">
                  I'm a passionate tech enthusiast and full-stack developer 
                  dedicated to building innovative and user-focused web applications. Skilled in React, 
                  TypeScript, NestJS, PostgreSQL, Java, C#, and Spring Boot, she enjoys crafting both 
                  dynamic front-end experiences and powerful backend systems.
                </p>
                <p className="mt-6 text-lg leading-relaxed">
                  I'm also an active member of Computer Society of Kirinyaga and have participated in hackathons and an 
                  industrial attachment at Teach2give, where I strengthened my technical and 
                  collaborative skills. Driven by curiosity and continuous learning, I strive to 
                  grow as a developer and inspire others in the tech community.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 text-center transition-all duration-300 transform bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:scale-105">
                  <Code className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Clean Code</h3>
                </div>
                <div className="p-6 text-center transition-all duration-300 transform bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl hover:scale-105">
                  <Palette className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">UI/UX Design</h3>
                </div>
                <div className="p-6 text-center transition-all duration-300 transform bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl hover:scale-105">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-teal-600" />
                  <h3 className="font-semibold text-gray-900">Performance</h3>
                </div>
                <div className="p-6 text-center transition-all duration-300 transform bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl hover:scale-105">
                  <Github className="w-8 h-8 mx-auto mb-2 text-pink-600" />
                  <h3 className="font-semibold text-gray-900">Collaboration</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 sm:text-4xl">
              Skills & <span className="text-purple-600">Technologies</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[
              { name: 'React', color: 'from-blue-400 to-blue-600' },
              { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
              { name: 'NestJS', color: 'from-red-400 to-red-600' },
              { name: 'PostgreSQL', color: 'from-blue-600 to-indigo-600' },
              { name: 'Java', color: 'from-orange-400 to-orange-600' },
              { name: 'C#', color: 'from-purple-500 to-purple-700' },
              { name: 'Spring Boot', color: 'from-green-400 to-green-600' },
              { name: 'TanStack Query', color: 'from-yellow-400 to-orange-500' },
              { name: 'Tailwind CSS', color: 'from-teal-400 to-teal-600' },
              { name: 'REST APIs', color: 'from-indigo-400 to-indigo-600' },
              { name: 'SQLite', color: 'from-gray-400 to-gray-600' },
              { name: '.NET', color: 'from-purple-400 to-purple-600' }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="p-6 text-center transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-105 hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <span className="text-lg font-bold text-white">
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-purple-600">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-r from-white to-purple-50">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 sm:text-4xl">
              Featured <span className="text-purple-600">Projects</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Car Wash System',
                description: 'Developed a full stack web app car wash application where the aim was to ease car wash services where you book a wash in station or get it done at the comfort of your home',
                technologies: ['React', 'TanStack', 'NestJS', 'PostgreSQL'],
                link: 'https://aggregator-car-wash-app.vercel.app',
                image: 'https://picsum.photos/400/250?random=1',
                gradient: 'from-blue-500 to-purple-600'
              },
              {
                name: 'Parcel Delivery System',
                description: 'A clean application that keeps and tracks parcel delivery services',
                technologies: ['React', 'TanStack', 'REST API', 'NestJS', 'PostgreSQL'],
                link: 'https://aggregator-car-wash-app.vercel.app',
                image: 'https://picsum.photos/400/250?random=2',
                gradient: 'from-teal-500 to-blue-600'
              },
              {
                name: 'Game App',
                description: 'Developed a game app providing many games you can choose from',
                technologies: ['.NET', 'C#', 'SQLite', 'React'],
                link: 'https://aggregator-car-wash-app.vercel.app',
                image: 'https://picsum.photos/400/250?random=3',
                gradient: 'from-purple-500 to-pink-600'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-500 transform bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-purple-600">
                    {project.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-purple-800 transition-colors duration-300 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/Gettie1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-purple-700 transition-all duration-300 transform border-2 border-purple-300 rounded-lg hover:bg-purple-50 hover:border-purple-400 hover:scale-105"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 sm:text-4xl">
              Get In <span className="text-purple-600">Touch</span>
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <div className="p-8 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl">
                <form
                  action="https://formspree.io/f/xpznvqpb"
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-purple-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-purple-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-purple-300"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-right">
              <div className="p-8 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Let's Connect
                </h3>
                <p className="mb-6 text-gray-600">
                  I'm always interested in new opportunities and collaborations. 
                  Feel free to reach out if you'd like to work together!
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:cheptoog677@gmail.com"
                    className="flex items-center p-3 text-gray-700 transition-all duration-300 transform hover:text-purple-600 rounded-xl hover:bg-purple-50 hover:scale-105"
                  >
                    <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                      <Mail size={20} className="text-white" />
                    </div>
                    cheptoog677@gmail.com
                  </a>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 text-gray-700 transition-all duration-300 transform hover:text-purple-600 rounded-xl hover:bg-purple-50 hover:scale-105"
                  >
                    <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800">
                      <Linkedin size={20} className="text-white" />
                    </div>
                    LinkedIn Profile
                  </a>
                  <a
                    href="https://github.com/Gettie1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 text-gray-700 transition-all duration-300 transform hover:text-purple-600 rounded-xl hover:bg-purple-50 hover:scale-105"
                  >
                    <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900">
                      <Github size={20} className="text-white" />
                    </div>
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-white bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900">
        <div className="max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <p className="text-lg">&copy; {new Date().getFullYear()} Getrude Cheptoo. All rights reserved.</p>
            <p className="mt-2 text-purple-300">Built with ❤️ and lots of ☕</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
