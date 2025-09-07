import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  FileText, 
  PenTool, 
  Clock, 
  Users, 
  CheckCircle 
} from "lucide-react";

const CoursesSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const courses = [
    {
      icon: GraduationCap,
      title: "Foundation Course",
      subtitle: "Complete Beginner Program",
      duration: "18 Months",
      students: "500+ Enrolled",
      popular: true,
      features: [
        "Basic to Advanced Concept Building",
        "NCERT Foundation",
        "Current Affairs Integration",
        "Mock Tests & Assessments",
        "Personal Mentorship"
      ],
      description: "Perfect for absolute beginners starting their UPSC journey. Comprehensive coverage from basics to advanced level.",
      cta: "Start Foundation Course"
    },
    {
      icon: FileText,
      title: "Prelims Practice",
      subtitle: "Intensive Test Series",
      duration: "12 Months",
      students: "300+ Enrolled",
      popular: false,
      features: [
        "Daily Practice Questions",
        "Weekly Mock Tests",
        "Detailed Performance Analysis",
        "Revision Classes",
        "Strategy Sessions"
      ],
      description: "Focused preparation for Prelims with extensive practice and performance analysis.",
      cta: "Join Prelims Program"
    },
    {
      icon: PenTool,
      title: "Advanced Mains Guidance",
      subtitle: "Answer Writing Excellence",
      duration: "15 Months",
      students: "200+ Enrolled",
      popular: false,
      features: [
        "Answer Writing Technique",
        "Subject-wise Coaching",
        "Essay Writing Classes",
        "One-on-One Feedback",
        "Interview Preparation"
      ],
      description: "Specialized program for Mains preparation with focus on answer writing and interview skills.",
      cta: "Apply for Mains Course"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Courses & Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed specifically for different stages 
            of your UPSC preparation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className={`relative shadow-card hover:shadow-hover transition-all duration-300 ${
                course.popular ? 'ring-2 ring-primary scale-105 lg:scale-110' : ''
              }`}
            >
              {course.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-warning text-warning-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <course.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students}
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <p className="text-sm text-primary font-medium">{course.subtitle}</p>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={() => scrollToSection("#contact")}
                  className={`w-full ${
                    course.popular 
                      ? 'bg-warning hover:bg-warning/90 text-warning-foreground' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                >
                  {course.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-2">Flexible Batches</div>
            <p className="text-muted-foreground">Morning, Evening & Weekend options available</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">EMI Options</div>
            <p className="text-muted-foreground">Easy payment plans to make education affordable</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">Money Back</div>
            <p className="text-muted-foreground">30-day satisfaction guarantee on all courses</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center rounded-lg bg-muted px-8 py-8 border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Not sure which course is right for you?
            </h3>
            <p className="text-muted-foreground mb-4">
              Get personalized course recommendations from our expert counselors
            </p>
            <Button 
              onClick={() => scrollToSection("#contact")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get Free Counseling
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;