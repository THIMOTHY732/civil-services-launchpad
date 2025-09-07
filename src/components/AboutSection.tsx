import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, BookOpen, Target } from "lucide-react";

const AboutSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: Award,
      title: "Expert Faculty",
      description: "Learn from former civil servants and subject matter experts with proven track records."
    },
    {
      icon: Users,
      title: "Beginner Focused",
      description: "Specially designed curriculum and teaching methodology for first-time UPSC aspirants."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Study",
      description: "Complete coverage of syllabus with updated materials and current affairs integration."
    },
    {
      icon: Target,
      title: "Success Oriented",
      description: "Personalized guidance and mentorship to maximize your chances of success."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About IAS Excellence Academy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Established with a mission to democratize civil services preparation, we have been guiding aspirants 
            towards their IAS dreams with a beginner-friendly approach and proven success methodology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Your Trusted Partner in Civil Services Journey
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At IAS Excellence Academy, we understand that starting your UPSC preparation can feel overwhelming. 
                That's why we've designed our programs specifically for beginners, breaking down complex concepts 
                into digestible modules with clear learning objectives.
              </p>
              <p>
                Our faculty comprises experienced educators, former civil servants, and subject experts who bring 
                real-world insights to your preparation. We believe in nurturing not just academic excellence, 
                but also the leadership qualities essential for a successful civil servant.
              </p>
              <p>
                With our innovative hybrid learning approach, you get the best of both worlds - personalized 
                offline guidance and the flexibility of online resources, ensuring your preparation never stops.
              </p>
            </div>
            <div className="mt-8">
              <Button 
                onClick={() => scrollToSection("#courses")}
                className="bg-primary hover:bg-primary/90"
              >
                Learn More About Our Programs
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-lg bg-primary/5 px-6 py-4 border border-primary/20">
            <div>
              <p className="text-foreground font-medium mb-2">
                Ready to begin your IAS preparation journey?
              </p>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;