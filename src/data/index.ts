import { PortfolioData } from "../types";

const DATA: PortfolioData = {
  name: "Getrude Cheptoo",
  title: "Full-Stack Developer",
  tagline: "I build things that live on the internet.",
  about:
    "I'm a full-stack developer obsessed with crafting seamless digital experience. I thrive at the intersection of design and engineering, turning complex problems into elegant solutions.",
  email: "cheptoog677@gmail.com",
  github: "github.com/Gettie1",
  linkedin: "www.linkedin.com/in/getrude-cheptoo-8859952b0/",
  skills: [
    { name: "React / Next.js", level: 88 },
    { name: "Node.js / Express / Nest", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "PostgreSQL / MongoDB", level: 82 },
    { name: "Docker / DevOps", level: 75 },
    { name: "GraphQL /", level: 78 },
    { name: "Python / FastAPI", level: 51 },
    { name: "PHP", level: 68 },
    { name: "AWS / Cloud", level: 70 },
  ],
  experience: [
    {
      role: "Full-Stack Software Developer Trainee",
      company: "Teach2Give",
      period: "May 2025 — August 2025",
      desc: "Took part in a massive 3-month training cohort where I worked with peers and created cool softwares",
    }
  ],
 projects: [
  {
    title: "Car Wash Management System",
    tag: "Full Stack",
    desc: "A web platform that connects customers with car wash vendors. Includes booking, service selection, payments, reviews, schedules, and role-based dashboards for admin, vendors, and users.",
    stack: ["React", "TanStack Router", "NestJS", "PostgreSQL", "Paystack"],
    color: "#FF4D00",
    link: "https://aggregator-car-wash-app.vercel.app/",
  },
  {
    title: "Student Record Management System",
    tag: "Education",
    desc: "A system for managing student records, courses, subjects, and registrations. Includes admin and student dashboards, audit logs, reporting, and feedback modules.",
    stack: ["React", "NestJS", "TypeORM", "PostgreSQL"],
    color: "#7B2FFF",
    link: "https://meme-board-navy.vercel.app/",
  },
  {
    title: "Parcel Delivery Tracking System",
    tag: "Logistics",
    desc: "A parcel delivery platform that allows users to send, track, and manage packages. Features delivery status updates, route tracking, and order management.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    color: "#00C48C",
    link: "https://parcel-delivery-tracking-system.vercel.app/",
  },
]
};

export const NAV_ITEMS: string[] = ["About", "Skills", "Experience", "Projects", "Contact"];

export default DATA;
