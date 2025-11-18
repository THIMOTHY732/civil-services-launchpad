import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Download
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Courses", href: "#courses" },
    { label: "Hybrid Learning", href: "#hybrid" },
    { label: "Success Stories", href: "#testimonials" },
    { label: "Free Resources", href: "#resources" },
    { label: "Contact Us", href: "#contact" }
  ];

  const courses = [
    { label: "Foundation Course", href: "#courses" },
    { label: "Prelims Practice", href: "#courses" },
    { label: "Mains Guidance", href: "#courses" },
    { label: "Interview Preparation", href: "#courses" },
    { label: "Test Series", href: "#courses" },
    { label: "Current Affairs", href: "#courses" }
  ];

  const resources = [
    { label: "UPSC Syllabus", href: "#resources" },
    { label: "Study Materials", href: "#resources" },
    { label: "Practice Papers", href: "#resources" },
    { label: "Video Lectures", href: "#resources" },
    { label: "Study Planner", href: "#resources" },
    { label: "Academy Prospectus", href: "#resources" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-primary-dark text-primary-dark-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Academy Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">IAS Excellence</span>
                <span className="text-xs text-white/80">Academy</span>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Empowering UPSC aspirants with quality education, expert guidance, and proven methodology. 
              Your trusted partner in achieving civil services success.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-warning flex-shrink-0" />
                <span className="text-white/90 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-warning flex-shrink-0" />
                <span className="text-white/90 text-sm">info@iasexcellence.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">123 Education Hub, Karol Bagh, New Delhi - 110005</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <social.icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/90 hover:text-warning transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(course.href)}
                    className="text-white/90 hover:text-warning transition-colors text-sm"
                  >
                    {course.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & CTA */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Free Resources</h3>
            <ul className="space-y-3 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(resource.href)}
                    className="text-white/90 hover:text-warning transition-colors text-sm"
                  >
                    {resource.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Ready to Start?</h4>
              <p className="text-white/90 text-sm mb-4">
                Download our comprehensive prospectus and begin your UPSC journey today.
              </p>
              <Button 
                onClick={() => scrollToSection("#contact")}
                size="sm"
                className="w-full bg-warning hover:bg-warning/90 text-warning-foreground"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-white/80 text-sm">
              © 2024 IAS Excellence Academy. All rights reserved.
            </p>
            <p className="text-white/60 text-xs mt-1">
              Empowering future civil servants since 2009
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4 text-xs">
              <a href="#" className="text-white/80 hover:text-warning transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-warning transition-colors">Terms of Service</a>
              <a href="#" className="text-white/80 hover:text-warning transition-colors">Refund Policy</a>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={() => scrollToSection("#contact")}
                variant="outline" 
                size="sm"
                className="border-white/30 text-white hover:bg-white hover:text-primary-dark"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;