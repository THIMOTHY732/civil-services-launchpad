import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  BookOpen, 
  Target, 
  Award, 
  Clock, 
  TrendingUp,
  CheckCircle2,
  Download
} from "lucide-react";

const BenefitsSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    {
      icon: Users,
      title: "Expert Faculty Team",
      description: "Learn from former civil servants, PhD holders, and subject matter experts with 15+ years of teaching experience."
    },
    {
      icon: BookOpen,
      title: "Structured Syllabus",
      description: "Comprehensive curriculum designed by UPSC experts, updated annually to reflect latest exam patterns and trends."
    },
    {
      icon: Target,
      title: "Beginner-Friendly Teaching",
      description: "Step-by-step approach that builds concepts from basics, perfect for first-time UPSC aspirants."
    },
    {
      icon: Award,
      title: "Proven Success Record",
      description: "500+ successful candidates in the last 5 years with consistent All India Rank holders."
    },
    {
      icon: Clock,
      title: "Flexible Learning Options",
      description: "Choose from morning, evening, or weekend batches with online and offline hybrid learning options."
    },
    {
      icon: TrendingUp,
      title: "Continuous Progress Tracking",
      description: "Regular assessments, personalized feedback, and performance analytics to monitor your growth."
    }
  ];

  const successStats = [
    { number: "500+", label: "Successful Candidates" },
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "Expert Faculty" },
    { number: "95%", label: "Student Satisfaction" }
  ];

  const whyChoosePoints = [
    "Small batch sizes ensuring personal attention",
    "Regular one-on-one mentorship sessions",
    "Updated study materials and current affairs",
    "Comprehensive test series with detailed analysis",
    "Interview guidance and personality development",
    "Scholarship programs for deserving students",
    "Alumni network and placement assistance",
    "Money-back guarantee if not satisfied"
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose IAS Excellence Academy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover what makes us the preferred choice for thousands of UPSC aspirants across the country.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Our Success in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us List */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              What Sets Us Apart
            </h3>
            <div className="grid gap-4">
              {whyChoosePoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card className="shadow-card p-8 text-center">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-warning/10 mx-auto mb-6">
                <Award className="h-10 w-10 text-warning" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">
                Excellence Guaranteed
              </h4>
              <p className="text-muted-foreground mb-6">
                Join thousands of successful candidates who chose IAS Excellence Academy for their civil services preparation.
              </p>
              <div className="space-y-3">
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-warning hover:bg-warning/90 text-warning-foreground"
                >
                  Start Your Journey Today
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection("#resources")}
                  className="w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Curriculum
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center rounded-lg bg-muted px-8 py-8 border max-w-2xl">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join IAS Excellence Academy and take the first step towards your dream of becoming a civil servant. 
              Our expert guidance and proven methodology will help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="bg-primary hover:bg-primary/90"
              >
                Get Free Consultation
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("#courses")}
              >
                View All Courses
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;