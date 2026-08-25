import {  ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  const projects = [
    {
      title: "Shop Now — E-Commerce",
      description:
        "A responsive e-commerce application with product browsing, categories, search, filtering, product details, cart management, authentication, pagination, and persistent cart data using local storage.",
      image: "/project1.png",
      tags: ["React", "JavaScript", "Tailwind CSS", "React Router", "Clerk"],
      link: "https://shop-now-e-comm-pro.vercel.app/",
      github: "https://github.com/abdullah1-ai/shop-now",
    },

    {
      title: "Admin Dashboard",
      description:
        "A responsive admin dashboard with data visualization, multiple dashboard pages, theme customization, sidebar navigation, settings, reusable UI components, and persistent theme preferences that remain saved after page refresh.",
      image: "/project2.png",
      tags: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Syncfusion",
        "React Router",
      ],
      link: "https://react-syncfusion-admin-dashboard.vercel.app/",
      github:
        "https://github.com/abdullah1-ai/react-syncfusion-admin-dashboard",
    },

    {
      title: "Multi-Step Form",
      description:
        "A responsive multi-step form with step-by-step navigation, form validation, error handling, progress tracking, persistent form data, reset functionality, and smooth animations.",
      image: "/project3.png",
      tags: ["React", "JavaScript", "Tailwind CSS", "Form Validation"],
      link: "https://multi-step-form-weld-tau.vercel.app/",
      github: "https://github.com/abdullah1-ai/Multi-Step-Form",
    },
  ];
  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="py-10">
          {/* Header */}
          <h2 className="text-2xl uppercase font-medium tracking-wide text-primary pb-6 text-center">
            Featured Work
          </h2>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground text-center mb-2">
            Projects that,
            <span className="font-serif italic font-normal text-white">
              {" "}
              showcase my skills.
            </span>
          </h2>

          <p className="text-muted-foreground text-sm md:text-xl text-center">
            A selection of my recent work built with React, JavaScript, and
            modern frontend technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12">
            {projects.map((item, index) => {
              return (
                <div
                  key={item.title}
                  className={`glass rounded-2xl overflow-hidden relative group animate-fade-in animation-delay-${index * 100}`}
                >
                  <div className="relative">
                    <img
                      className="block w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="absolute inset-0 flex items-center justify-center gap-2 z-30">
                      <a
                        href={item.github}
                        target="_blank"
                        className="p-4 glass-strong  rounded-full hover:bg-secondary-foreground/50"
                      >
                        <FaGithub size={"1.5rem"} />
                      </a>
                      <a
                        href={item.link}
                        target="_blank"
                        className="p-4 glass  rounded-full hover:bg-secondary"
                      >
                        <ArrowUpRight size={"1.5rem"} />
                      </a>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                  />

                  {/* Content  */}

                  <div className="py-8 text-xl px-4">
                    <div className="flex items-center justify-between ">
                      <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h2>

                      <ArrowUpRight
                        className="group-hover:translate-x-1 group-hover:translate-y-1  transition-all duration-400  text-muted-foreground group-hover:text-primary"
                        size={"1.5rem"}
                      />
                    </div>

                    <p className="text-muted-foreground text-[16px]">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 text-sm pt-3">
                      {item.tags.map((tag, index) => (
                        <p
                          key={index}
                          className="inline-block px-3 py-2 rounded-full border border-surface glass text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
