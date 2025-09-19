import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Code,
  TrendingUp,
  Database,
  GraduationCap,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from "lucide-react";
import creitLogoMark from "@/assets/creit-fef4f0.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Academy", href: "#academy" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Software Development", href: "#services", icon: <Code className="h-4 w-4" /> },
    { name: "Digital Marketing", href: "#services", icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Research Solutions", href: "#services", icon: <Database className="h-4 w-4" /> },
    { name: "Creit Tech Academy", href: "#academy", icon: <GraduationCap className="h-4 w-4" /> }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" }
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-creit-navy text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Creit Technologies</h3>
            <p className="text-m text-white/80 mb-8">
              Get the latest insights on technology trends, digital transformation tips, and exclusive offers.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-creit-accent"
              />
              <Button variant="secondary" size="lg" className="group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={creitLogoMark} alt="Creit Technologies" className="h-10 w-10" />
              <span className="text-xl font-bold">Creit</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Empowering businesses with innovative technology solutions that strengthen 
              digital presence, optimize operations, and accelerate growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-creit-accent" />
                <a href="mailto:info@creittech.com" className="text-white/80 hover:text-creit-accent transition-colors">
                  info@creittech.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-creit-accent" />
                <a href="tel:+2348034166561" className="text-white/80 hover:text-creit-accent transition-colors">
                  +234 (803) 416-6561
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-creit-accent mt-1" />
                <span className="text-white/80">
                  Katampe<br />
                  Federal Capital Territory, Abuja.
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-creit-accent transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="flex items-center space-x-2 text-white/80 hover:text-creit-accent transition-colors duration-300 group"
                  >
                    <span className="group-hover:text-creit-accent">{service.icon}</span>
                    <span>{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xl font-bold mb-6">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white/10 rounded-xl hover:bg-creit-accent hover:text-creit-navy transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="bg-creit-accent/20 rounded-2xl p-6">
              <h5 className="font-bold mb-2">Ready to Start?</h5>
              <p className="text-sm text-white/80 mb-4">
                Let's discuss your project and create something amazing together.
              </p>
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="w-full"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {currentYear} Creit Technologies Limited. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-creit-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-creit-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-creit-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;