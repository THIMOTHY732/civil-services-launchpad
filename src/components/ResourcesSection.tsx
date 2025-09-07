import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  BookOpen, 
  Download, 
  Video, 
  PenTool, 
  Calendar,
  CheckCircle2
} from "lucide-react";

const ResourcesSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const resources = [
    {
      icon: FileText,
      title: "Complete Syllabus Guide",
      description: "Comprehensive UPSC syllabus breakdown with topic-wise preparation strategy and timeline.",
      type: "PDF",
      size: "2.5 MB",
      downloads: "5000+"
    },
    {
      icon: BookOpen,
      title: "Sample Study Notes",
      description: "High-quality sample notes from our foundation course covering key topics and concepts.",
      type: "PDF",
      size: "8.2 MB",
      downloads: "3500+"
    },
    {
      icon: Video,
      title: "Demo Lecture Videos",
      description: "Access to our best faculty lectures covering important topics from different subjects.",
      type: "Video",
      size: "Multiple",
      downloads: "2800+"
    },
    {
      icon: PenTool,
      title: "Practice Question Bank",
      description: "500+ practice questions with detailed solutions for Prelims and Mains preparation.",
      type: "PDF",
      size: "5.1 MB",
      downloads: "4200+"
    },
    {
      icon: Calendar,
      title: "Study Planner Template",
      description: "12-month study planner template to organize your UPSC preparation effectively.",
      type: "Excel",
      size: "1.2 MB",
      downloads: "6000+"
    },
    {
      icon: BookOpen,
      title: "Academy Prospectus",
      description: "Complete information about our courses, faculty, facilities, and admission process.",
      type: "PDF",
      size: "3.8 MB",
      downloads: "8500+"
    }
  ];

  const benefits = [
    "Updated annually by our expert faculty",
    "Beginner-friendly content and language",
    "Aligned with latest UPSC exam pattern",
    "Free lifetime access to all materials",
    "Regular updates and additional resources",
    "Mobile-friendly formats for easy access"
  ];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Free Resources & Downloads
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive collection of study materials, guides, and resources to kickstart 
            your UPSC preparation journey.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">{resource.type}</div>
                    <div className="text-xs text-muted-foreground">{resource.size}</div>
                  </div>
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    {resource.downloads} downloads
                  </span>
                  <span className="text-sm font-medium text-accent">Free</span>
                </div>
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  className="w-full"
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Our Resources Are Different
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="bg-primary hover:bg-primary/90"
              >
                Get All Resources
              </Button>
            </div>
          </div>

          <div>
            <Card className="shadow-card p-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-warning/10 mx-auto mb-6">
                  <Download className="h-8 w-8 text-warning" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Get Your Free UPSC Guide
                </h4>
                <p className="text-muted-foreground mb-6">
                  Download our comprehensive beginner's guide to UPSC preparation with detailed roadmap, 
                  study schedule, and expert tips.
                </p>
                <div className="bg-muted p-4 rounded-lg mb-6">
                  <div className="text-2xl font-bold text-primary mb-1">50+ Pages</div>
                  <div className="text-sm text-muted-foreground">Complete preparation guide</div>
                </div>
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-warning hover:bg-warning/90 text-warning-foreground"
                >
                  Download Free Guide
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">25,000+</div>
            <p className="text-muted-foreground">Total Downloads</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <p className="text-muted-foreground">Study Materials</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">Video Lectures</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">Free</div>
            <p className="text-muted-foreground">Lifetime Access</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center rounded-lg bg-muted px-8 py-8 border max-w-2xl">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Want Access to Premium Resources?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our enrolled students get access to exclusive study materials, advanced practice tests, 
              and personalized guidance materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => scrollToSection("#courses")}
                className="bg-primary hover:bg-primary/90"
              >
                View Premium Courses
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("#contact")}
              >
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;