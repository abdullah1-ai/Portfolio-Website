import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const navLinks = [
  { to: "about", label: "About" },
  { to: "projects", label: "Projects" },
  { to: "experience", label: "Experience" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else setIsScroll(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 pt-3 z-50 ${isScroll && "glass transition-all duration-500"}`}
    >
      <div className="flex justify-between container mx-auto px-6">
        <Link to="hero"
            smooth={true}
                duration={500}
                offset={-100}>
        <h2 className="inline hover:text-primary hover:border-b-1 border-primary text-white cursor-pointer text-xl font-serif tracking-tight hover:ease-in-out  duration-200">
          Fahad Abdullah<span className="inline text-primary">.</span>
        </h2>
        </Link>
        <div className="hidden md:flex">
          <div className="glass px-3 py-2 rounded-full cursor-pointer">
            {navLinks.map((item, index) => (
              <Link
                key={item.to}
                className="px-2 py-2 hover:text-foreground text-muted-foreground hover:bg-surface rounded-full"
                to={item.to}
                smooth={true}
                duration={500}
                offset={-100}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <Link to={"contact"} smooth={true} duration={500} offset={-100}>
            <Button size="sm">Contact Us</Button>
          </Link>
        </div>
        <div
          className="block md:hidden"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {openMenu ? <X /> : <Menu />}
        </div>
      </div>
      {openMenu && (
        <div className="flex flex-col gap-4 glass-strong mt-2 px-3 pb-2 animate-fade-in">
          {navLinks.map((item, index) => (
            <Link
              smooth={true}
              duration={500}
              offset={-100}
              key={item.to}
              className="px-2 py-2 hover:text-foreground text-muted-foreground hover:bg-surface rounded-full"
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={"contact"}
            smooth={true}
            duration={500}
            offset={-100}
            className=" md:inline flex"
          >
            <Button className="flex justify-center flex-1">Contact Me</Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
