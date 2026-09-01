import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-scroll";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/abdullah1-ai", label: "GitHub" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/fahad-abdullah-dev/",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-100}
              className="text-xl font-bold tracking-tight"
            >
              <h2 className="inline hover:text-primary hover:border-b-1 border-primary text-white cursor-pointer text-xl font-serif tracking-tight hover:ease-in-out  duration-200">
                Fahad Abdullah<span className="inline text-primary">.</span>
              </h2>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Fahad Abdullah. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6  cursor-pointer">
            {footerLinks.map((link) => (
              <Link
                to={link.href}
                key={link.href}
                smooth={true}
                duration={500}
                offset={-100}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
