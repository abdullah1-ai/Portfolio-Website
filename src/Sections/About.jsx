import React from "react";

import { Code2, Monitor, BookOpen, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean & Reusable Code",
      description:
        "Building clean, organized, and reusable React components for maintainable applications.",
    },
    {
      icon: Monitor,
      title: "Responsive Design",
      description:
        "Creating responsive interfaces that provide a smooth experience across different screen sizes.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Breaking problems into smaller parts and finding practical solutions through understanding.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Continuously improving my frontend skills and learning modern tools through practical projects.",
    },
  ];
  return (
    <section id="about" className=" my-20 ">
      <div className="container mx-auto px-6">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4
        "
        >
          {/* Left Content */}
          <div>
            <h1 className="text-2xl uppercase font-medium tracking-wide text-primary/90 pb-6">
              About me
            </h1>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building{" "}
              <span className="font-serif italic font-normal text-white">
                {" "}
                practical experiences.
              </span>
            </h2>
            <div className="flex flex-col gap-4 text-base md:text-lg text-muted-foreground mt-3 animate-fade-in animation-delay-200">
              <p>
                I'm a BS Computer Science graduate and Frontend Developer
                specializing in React and JavaScript, with a focus on building
                responsive, interactive, and user-friendly web applications. I
                enjoy creating clean and reusable UI components, integrating
                APIs, managing application state, and turning ideas into
                practical web experiences.
              </p>
              <p>
                I've built projects including e-commerce applications, admin
                dashboards, and multi-step forms using technologies such as
                React, Tailwind CSS, Context API, useReducer, React Router,
                Vite, and JavaScript. I'm continuously improving my
                problem-solving and development skills while learning to build
                applications with cleaner architecture and better user
                experiences.
              </p>
            </div>

            <div className="relative my-5 animate-fade-in animation-delay-300">
              <div className="glow-div rounded-2xl animate-pulse absolute inset-0" />
              <div className="glass p-4 text-foreground rounded-2xl relative z-10 ">
                <p>
                  "My mission is to grow as a Frontend Developer by building
                  user-focused applications, writing clean and maintainable
                  code, and continuously improving my skills through every
                  project."
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-4 glass p-6 md:p-8 rounded-2xl animate-fade-in  animation-delay-${index * 100}`}
                >
                  <p className="text-primary bg-primary/10 w-fit p-4 rounded-2xl">
                    {<item.icon size={"1.5rem"} />}
                  </p>
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
