import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const FAQSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      question: "What is the eligibility criteria for UPSC Civil Services Exam?",
      answer: "To appear for UPSC CSE, you need to be an Indian citizen, have a bachelor's degree from a recognized university, and be between 21-32 years of age (with relaxations for reserved categories). There's no minimum percentage requirement for graduation."
    },
    {
      question: "How does your hybrid learning system work?",
      answer: "Our hybrid learning combines the best of offline and online education. You attend regular classroom sessions for interactive learning and doubt clearing, while having 24/7 access to recorded lectures, study materials, and online tests. You can switch between modes based on your convenience."
    },
    {
      question: "Is this academy suitable for complete beginners?",
      answer: "Absolutely! We specialize in beginner-friendly teaching. Our foundation courses start from the basics, with step-by-step concept building. Our faculty is trained to handle first-time aspirants and guide them through every aspect of UPSC preparation."
    },
    {
      question: "What study materials are provided?",
      answer: "We provide comprehensive study materials including printed notes, digital resources, current affairs magazines, test series, previous year question papers, and access to our online library. All materials are updated annually to reflect the latest exam patterns."
    },
    {
      question: "How many attempts are allowed for UPSC?",
      answer: "General category candidates get 6 attempts until age 32, OBC candidates get 9 attempts until age 35, and SC/ST candidates have unlimited attempts until age 37. Each attempt is counted when you appear for the Prelims exam."
    },
    {
      question: "What is the duration of your courses?",
      answer: "Our Foundation Course is 18 months, Prelims Practice is 12 months, and Mains Guidance is 15 months. We also offer flexible batch timings including weekend and evening options to suit working professionals and students."
    },
    {
      question: "Do you provide placement assistance after clearing UPSC?",
      answer: "While UPSC itself handles the posting process, we provide guidance on training academies (LBSNAA, etc.), interview preparation for different services, and connect you with our alumni network for mentorship during your service career."
    },
    {
      question: "What is your fee structure and payment options?",
      answer: "We offer flexible payment options including EMI plans to make quality education affordable. Fee varies by course - Foundation Course starts from ₹1,20,000. We also provide scholarships for meritorious and economically disadvantaged students."
    },
    {
      question: "How is the faculty selected?",
      answer: "Our faculty comprises former civil servants, PhD holders, and subject experts with minimum 10 years of teaching experience. They undergo regular training and evaluation to maintain teaching quality and stay updated with exam patterns."
    },
    {
      question: "Can I switch between online and offline modes?",
      answer: "Yes, our hybrid model allows complete flexibility. If you're attending offline classes and need to travel, you can switch to online mode temporarily. All sessions are recorded, so you never miss any content."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about UPSC preparation, our academy, courses, and admission process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg shadow-card border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center rounded-lg bg-background px-8 py-8 border shadow-card max-w-2xl">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our admission counselors are here to help you with any queries about UPSC preparation, 
              our courses, or the admission process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="bg-primary hover:bg-primary/90"
              >
                Contact Our Counselors
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("#contact")}
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-lg font-semibold text-foreground mb-2">Call Us</div>
            <p className="text-muted-foreground">+91 98765 43210</p>
            <p className="text-xs text-muted-foreground">Mon-Sat, 9 AM - 6 PM</p>
          </div>
          <div>
            <div className="text-lg font-semibold text-foreground mb-2">Email Us</div>
            <p className="text-muted-foreground">info@iasexcellence.com</p>
            <p className="text-xs text-muted-foreground">24-hour response time</p>
          </div>
          <div>
            <div className="text-lg font-semibold text-foreground mb-2">Visit Us</div>
            <p className="text-muted-foreground">123 Education Hub, Delhi</p>
            <p className="text-xs text-muted-foreground">Free counseling available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;