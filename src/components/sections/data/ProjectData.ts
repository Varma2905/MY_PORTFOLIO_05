// src/components/sections/data/ProjectData.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  features?: string[];
  life?: string;
  tech: string[];
  image: string; // URL
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A React.js application to track and manage daily expenses efficiently.",
    features: ["Add/Edit/Delete Expenses", "Monthly Reports", "Analytics Charts"],
    life: "Built as a personal finance management project.",
    tech: ["React", "Node.js", "MongoDB Atlas"],
    image: "/project-images/expense-income.png",
    github: "https://github.com/Varma2905/expense_forntend_1",
    demo: "https://expenseforntend1-7o9c-136gr7zli-varmas-projects-569a65c8.vercel.app/", 
  },
  {
    id: "updated-expense-tracker",
    title: "Updated Expense Tracker",
    description:" An enhanced version of the Expense Tracker with improved UI and additional features.",
    features: ["User Authentication", "Budget Planning", "Data Export"],
    life: "An improved iteration of the initial expense tracker project.",
    tech: ["React", "supabase"],
    image: "/project-images/expense-income.png",
    github: "https://github.com/Varma2905/updated-expense-journal",
    demo:"https://updated-expense-journal.vercel.app/authhttps://updated-expense-journal.vercel.app/auth",
  },
  
  {
    id: "transportation-management",
    title: "Transportation Management System",
    description:
      "A system to manage transportation logistics and operations efficiently.",
    features: ["Vehicle Tracking", "Route Management", "Driver Logs"],
    life: "Created during internship for practical transport solutions.",
    tech: ["Java"],
    image: "/project-images/tms-transport-management-system.webp", 
    github: "https://github.com/Varma2905/Transportation_management_system",
  },
  {
    id: "ai-nova",
    title: "AI NOVA",
    description:
      "AI Nova is an intelligent AI chatbot application built with a modern and scalable architecture. The frontend is developed using React and TypeScript, providing a smooth, responsive, and user-friendly interface for real-time conversations.The backend is powered by Supabase, leveraging its Edge Functions to handle secure, low-latency server-side logic and database interactions efficiently. This setup allows AI Nova to process user queries, manage authentication, and deliver intelligent chatbot responses seamlessly, demonstrating the integration of advanced AI with modern web technologies.",
    features: ["Conversational AI", "Task Automation", "User-friendly UI"],
    life: "Research project integrating AI models with front-end.",
    tech: ["TypeScript", "React TSX", "Supabase", "Tailwind CSS"],
    image: "/project-images/images.jpeg", 
    github: "https://github.com/Varma2905/AI_NOVA",
    demo: "https://68f4ffe82e8a8762a6d5e667--ainova1.netlify.app/",
  },
];
