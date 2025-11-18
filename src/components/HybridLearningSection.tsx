import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Monitor, 
  MapPin, 
  Video, 
  Users, 
  Clock, 
  BookOpen,
  CheckCircle2,
  Play
} from "lucide-react";

const HybridLearningSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    {
      icon: MapPin,
      title: "Offline Classes",
      description: "Face-to-face interaction with faculty and peer learning in our modern classrooms."
    },
    {
      icon: Monitor,
      title: "Online Access",
      description: "24/7 access to recorded lectures, study materials, and online assessments."
    },
    {
      icon: Video,
      title: "Live Sessions",
      description: "Interactive live classes with real-time doubt clearing and discussions."
    },
    {
      icon: Users,
      title: "Personal Mentorship",
      description: "One-on-one guidance sessions with experienced mentors and faculty."
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Study at your own pace with recorded content and flexible batch timings."
    },
    {
      icon: BookOpen,
      title: "Complete Resources",
      description: "Digital library, test series, and comprehensive study materials."
    }
  ];

  const features = [
    "Switch between online and offline modes seamlessly",
    "Access recorded lectures anytime, anywhere",
    "Live doubt clearing sessions every week",
    "Personal study planner and progress tracking",
    "Offline exam simulation and online practice tests",
    "Regular parent-teacher meetings (for younger students)"
  ];

  return (
    <section id="hybrid" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Hybrid Learning Advantage
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the perfect blend of traditional classroom learning and modern digital convenience. 
            Our hybrid approach ensures you never miss out on quality education.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            How Our Hybrid Learning Works
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Attend Offline Classes</h4>
                <p className="text-muted-foreground">
                  Join our interactive classroom sessions for concept building, discussions, and immediate doubt clearing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Access Online Content</h4>
                <p className="text-muted-foreground">
                  Review recorded lectures, access additional resources, and practice with our online test series.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Get Personal Guidance</h4>
                <p className="text-muted-foreground">
                  Receive individual mentorship and customized study plans based on your progress and needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                <benefit.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Students Love Our Hybrid Approach
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center lg:text-left">
            <Card className="shadow-card p-8">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mx-auto lg:mx-0 mb-6">
                <Play className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">
                Experience It Yourself
              </h4>
              <p className="text-muted-foreground mb-6">
                Join our free demo class to see how our hybrid learning model can accelerate your UPSC preparation.
              </p>
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="bg-warning hover:bg-warning/90 text-warning-foreground w-full lg:w-auto"
              >
                Join a Demo Class
              </Button>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <p className="text-muted-foreground">Hours of Content</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Online Access</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Attendance Rate</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Mock Tests</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridLearningSection;