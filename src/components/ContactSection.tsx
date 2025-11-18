import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle2,
  Download
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    course: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted Successfully!",
      description: "Our counselor will contact you within 24 hours. Thank you for your interest!",
    });
    setFormData({ name: "", email: "", phone: "", message: "", course: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      subtext: "Mon-Sat, 9 AM - 6 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@iasexcellence.com", "admissions@iasexcellence.com"],
      subtext: "24-hour response guarantee"
    },
    {
      icon: MapPin,
      title: "Visit Our Campus",
      details: ["123 Education Hub, Karol Bagh", "New Delhi - 110005"],
      subtext: "Free campus tour available"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Saturday: 9 AM - 6 PM", "Sunday: 10 AM - 4 PM"],
      subtext: "Online support 24/7"
    }
  ];

  const quickActions = [
    {
      icon: Download,
      title: "Download Prospectus",
      description: "Get detailed information about all our courses",
      action: "Download Now"
    },
    {
      icon: CheckCircle2,
      title: "Free Counseling",
      description: "Get personalized guidance from our experts",
      action: "Book Session"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Start Your IAS Journey Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to begin your UPSC preparation? Get in touch with our expert counselors for personalized 
            guidance and course recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Request a Callback</CardTitle>
              <p className="text-muted-foreground text-center">
                Fill out this form and our counselor will contact you within 2 hours
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@domain.com"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="course">Interested Course</Label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="mt-2 w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a course</option>
                      <option value="foundation">Foundation Course</option>
                      <option value="prelims">Prelims Practice</option>
                      <option value="mains">Advanced Mains Guidance</option>
                      <option value="hybrid">Hybrid Learning Program</option>
                      <option value="counseling">Just Need Counseling</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your background, goals, or any specific questions..."
                    className="mt-2 min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-warning hover:bg-warning/90 text-warning-foreground"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Request Callback
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Info Grid */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground mb-1">{detail}</p>
                        ))}
                        <p className="text-xs text-muted-foreground mt-2">{info.subtext}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                          <action.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{action.title}</h4>
                          <p className="text-sm text-muted-foreground">{action.description}</p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        {action.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="shadow-card">
              <CardContent className="p-0">
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">123 Education Hub, Karol Bagh, New Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center rounded-lg bg-muted px-8 py-8 border max-w-2xl">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Prefer to Visit Our Campus?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a free campus visit to meet our faculty, see our facilities, and get a feel for our learning environment.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Schedule Campus Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;