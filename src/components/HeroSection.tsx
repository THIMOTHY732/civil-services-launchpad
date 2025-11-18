import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="IAS UPSC Academy students in classroom preparing for civil services examination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
              <span className="mr-2">🎯</span>
              India's Most Trusted IAS Academy for Beginners
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Start Your IAS Journey 
              <span className="block text-warning">with Confidence</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
              Join thousands of successful candidates who began their civil services preparation with our beginner-friendly approach, expert faculty, and proven methodology.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start">
                <span className="text-2xl font-bold text-warning mr-2">500+</span>
                <span className="text-white/90">Successful Candidates</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <span className="text-2xl font-bold text-warning mr-2">15+</span>
                <span className="text-white/90">Years Experience</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <span className="text-2xl font-bold text-warning mr-2">95%</span>
                <span className="text-white/90">Student Satisfaction</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-warning hover:bg-warning/90 text-warning-foreground font-semibold px-8 py-4 text-lg shadow-hover"
              >
                Enroll Now
                <span className="ml-2">→</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="border-white text-white hover:bg-white hover:text-primary-dark font-semibold px-8 py-4 text-lg backdrop-blur-sm"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Prospectus
              </Button>
            </div>

            {/* Demo Class Link */}
            <div className="mt-6">
              <button 
                onClick={() => scrollToSection("#hybrid")}
                className="inline-flex items-center text-white/90 hover:text-white transition-colors group"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium border-b border-white/30 group-hover:border-white">
                  Watch Demo Class
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;