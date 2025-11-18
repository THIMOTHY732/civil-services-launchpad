import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      rank: "AIR 45, 2023",
      image: "/placeholder.svg",
      quote: "IAS Excellence Academy transformed my preparation completely. The beginner-friendly approach and expert faculty helped me clear UPSC in my first attempt. The hybrid learning model was perfect for my schedule.",
      rating: 5,
      background: "Engineering Graduate"
    },
    {
      name: "Rahul Kumar",
      rank: "AIR 78, 2023",
      image: "/placeholder.svg",
      quote: "As a first-time aspirant, I was overwhelmed by the vast syllabus. The structured curriculum and personal mentorship at IAS Excellence made everything manageable. Highly recommend for beginners!",
      rating: 5,
      background: "Commerce Graduate"
    },
    {
      name: "Anjali Patel",
      rank: "AIR 112, 2022",
      image: "/placeholder.svg",
      quote: "The faculty's experience and teaching methodology are exceptional. The regular tests and feedback helped me identify my weak areas and improve consistently. Grateful for their guidance!",
      rating: 5,
      background: "Arts Graduate"
    },
    {
      name: "Vikash Singh",
      rank: "AIR 156, 2023",
      image: "/placeholder.svg",
      quote: "The hybrid learning approach was a game-changer for me. I could attend offline classes while having access to online resources. The personal attention and mentorship were invaluable.",
      rating: 5,
      background: "Science Graduate"
    },
    {
      name: "Neha Gupta",
      rank: "AIR 203, 2022",
      image: "/placeholder.svg",
      quote: "From a complete beginner to clearing UPSC - this academy made it possible. The step-by-step approach and comprehensive study materials built my confidence gradually.",
      rating: 5,
      background: "Literature Graduate"
    },
    {
      name: "Arjun Mehta",
      rank: "AIR 267, 2023",
      image: "/placeholder.svg",
      quote: "The interview guidance and personality development sessions were exceptional. The faculty's real-world insights and experience sharing helped me perform confidently in the final stage.",
      rating: 5,
      background: "Economics Graduate"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our successful candidates who started their UPSC journey as beginners and achieved their dreams 
            with our guidance and support.
          </p>
        </div>

        {/* Featured Success Rate */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-lg bg-primary/10 px-6 py-3 border border-primary/20">
            <Star className="h-5 w-5 text-warning mr-2" />
            <span className="text-foreground font-semibold">
              4.9/5 Average Rating from 500+ Successful Students
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-warning fill-warning" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground text-center leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <Avatar className="h-12 w-12 mb-3">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm font-medium text-primary">{testimonial.rank}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.background}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Success Stories</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <p className="text-muted-foreground">First Attempt Success</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">Top 500</div>
            <p className="text-muted-foreground">AIR Achievements</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center rounded-lg bg-background px-8 py-8 border shadow-card max-w-2xl">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the ranks of successful civil servants who trusted IAS Excellence Academy for their UPSC preparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-warning hover:bg-warning/90 text-warning-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your Journey Today
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector("#courses");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Our Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;