import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Full Stack Developer",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
    rating: 5,
    text: "Alpine Verge's Python course completely transformed my career. The hands-on projects and expert guidance helped me land my dream job as a full-stack developer."
  },
  {
    name: "Mike Chen",
    role: "YouTuber & Content Creator",
    company: "1M+ Subscribers",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    rating: 5,
    text: "The YouTube Creator Masterclass is incredible! I went from 1K to 100K subscribers in 6 months using the strategies taught in this course."
  },
  {
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    company: "Creative Agency",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    rating: 5,
    text: "The Photoshop course opened up so many opportunities for me. The techniques I learned helped me secure multiple freelance projects."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our students who have achieved remarkable success after completing our courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <Quote size={32} className="text-primary opacity-50" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className="text-primary fill-current" 
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center space-x-3 pt-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;