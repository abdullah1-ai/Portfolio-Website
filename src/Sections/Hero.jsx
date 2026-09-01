import Button from "../Components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-scroll";
import cvPdf from "../Assets/Cv_Fahad_Abdullah.pdf";

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={"1.5rem"} />,
      href: "https://github.com/abdullah1-ai",
    },
    {
      icon: <FaLinkedinIn size={"1.5rem"} />,
      href: "https://www.linkedin.com/in/fahad-abdullah-8b809a275/",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "React Router",
    "Redux Toolkit",
    "Vite",
    "NPM",
    "Git",
    "GitHub",
    "Vercel",
  ];

  return (
    <section id="hero" className="min-h-screen overflow-hidden z-0  relative">
      {/* Image Add Code */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className=" h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating Dots Code */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full z-10"
            style={{
              backgroundColor: "#20B2A6",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container px-6 mx-auto pt-3 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 z-20  mt-15  gap-5">
          {/* Details Section */}
          <div className="flex flex-col gap-3 ">
            <div className="glass px-3 py-1 rounded-full w-fit text-primary inline-flex items-center gap-2 cursor-pointer font-medium text-sm md:text-lg animate-fade-in animation-delay-100">
              <span className="inline-block w-2 h-2 bg-primary rounded-full" />
              <span>Frontend Developer</span>
              <span className="inline-block w-2 h-2 bg-primary rounded-full" />
              <span>React & JavaScript</span>
            </div>

            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight animate-fade-in animation-delay-200">
              Crafting
              <span className="glow-text inline-block">digital</span>
              <br />
              experiences with
              <br />
              <span className="font-serif italic">precision.</span>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl animate-fade-in animation-delay-300 mt-3 leading-relaxed">
              Hi, I'm Fahad Abdullah, a Frontend Developer building responsive
              and interactive web applications with React, JavaScript, and
              Tailwind CSS. I focus on creating clean, reusable components,
              integrating APIs, managing application state, and turning ideas
              into practical, user-friendly experiences.
            </p>

            <div className="flex flex-wrap  items-center gap-5 animate-fade-in animation-delay-400">
              <Link
                to={"contact"}
                smooth={true}
                duration={500}
                offset={-100}
                className="flex"
              >
                <Button className="flex flex-row items-center gap-2 lg:px-8 lg:py-4 lg:text-lg px-4 py-2 text-sm">
                  Contact Us <ArrowRight size={"1.2rem"} />
                </Button>
              </Link>
              <a
                href={cvPdf}
                download="Fahad_Abdullah_Cv.pdf"
                className=""
              >
                <button className="button lg:text-[18px] glass glow flex items-center gap-2 shadow-inside text-foreground lg:px-8 lg:py-4 lg:text-lg px-4 py-2 text-sm">
                  <Download size={"1.2rem"} /> Download Cv
                  <svg className="glow-container">
                    <rect
                      pathLength="100"
                      strokeLinecap="round"
                      className="glow-blur"
                    ></rect>
                    <rect
                      pathLength="100"
                      strokeLinecap="round"
                      className="glow-line"
                    ></rect>
                  </svg>
                </button>
              </a>
            </div>

            <div className="flex items-center gap-4 mt-6 animate-fade-in animation-delay-500">
              <p className="text-xl text-muted-foreground">Follow Me:</p>
              <div className="flex items-center gap-4">
                {socialLinks.map((item, i) => (
                  <a
                    className="glass p-3 glass shadow-inside rounded-full text-primary hover:text-foreground "
                    href={item.href}
                    target="_blank"
                    key={i}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-4 w-full max-w-md mx-auto relative animate-fade-in animation-delay-300">
            <div className="relative  rounded-lg mx-auto">
              <div className="absolute inset-0 glass glow-div animate-pulse rounded-lg" />
              <div className="relative z-10 p-1">
                <img
                  src="/Picture1.png"
                  className="object-cover rounded-2xl w-full aspect-[4/5]"
                  alt="Fahad Abdullah"
                />

                <div className="absolute -bottom-2 -right-2 glass p-2 rounded-2xl animate-floating animation-delay-500">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-3 h-3 inline-block bg-green-500 rounded-full animate-pulse" />{" "}
                    <p>Available for Work</p>
                  </div>
                </div>
                <div className="absolute -top-2 -left-2 glass-strong p-2 rounded-2xl animate-floating animation-delay-500">
                  <p className="text-primary text-2xl font-semibold">6+</p>
                  <p className="text-sm text-muted-foreground">Months Exp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Skills Section */}

          <div className=" py-9 animate-fade-in animation-delay-600">
            <p className="text-center pb-4 text-xl text-muted-foreground font-semibold">
              Technologies, I work with
            </p>
            <div className="flex animate-marquee  cursor-pointer">
              {[...skills, ...skills].map((item, index) => {
                return (
                  <div
                    className="px-4 md:px-8 shrink-0 text-muted-foreground/50 hover:text-muted-foreground text-xl transition-colors font-semibold"
                    key={index}
                  >
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center text-lg text-muted-foreground font-semibold animate-fade-in animation-delay-500">
            <Link
              className="flex flex-col items-center  gap-2"
              smooth={true}
              duration={500}
              offset={-100}
              to="about"
            >
              <p>Scroll</p>
              <p className="animate-bounce">
                <ChevronDown />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
