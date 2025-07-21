import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Image, Video, Youtube, Coffee, Zap, Clock, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Python Programming Mastery",
    description: "Master Python from basics to advanced concepts with real-world projects",
    icon: Code,
    price: "$99",
    rating: 4.8,
    students: "2.1k",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    category: "Programming",
    gradient: "bg-gradient-primary"
  },
  {
    id: 2,
    title: "Java Development Complete",
    description: "Build enterprise applications with Java and Spring framework",
    icon: Coffee,
    price: "$129",
    rating: 4.9,
    students: "1.8k",
    duration: "16 weeks",
    level: "Intermediate",
    category: "Programming",
    gradient: "bg-brand-orange"
  },
  {
    id: 3,
    title: "C Programming Fundamentals",
    description: "Learn the foundation of programming with C language",
    icon: Zap,
    price: "$79",
    rating: 4.7,
    students: "1.5k",
    duration: "8 weeks",
    level: "Beginner",
    category: "Programming",
    gradient: "bg-brand-blue"
  },
  {
    id: 4,
    title: "Adobe Photoshop Pro",
    description: "Create stunning designs and master photo editing techniques",
    icon: Image,
    price: "$89",
    rating: 4.8,
    students: "3.2k",
    duration: "10 weeks",
    level: "All Levels",
    category: "Design",
    gradient: "bg-brand-purple"
  },
  {
    id: 5,
    title: "Premiere Pro Video Editing",
    description: "Professional video editing and motion graphics mastery",
    icon: Video,
    price: "$119",
    rating: 4.9,
    students: "2.7k",
    duration: "14 weeks",
    level: "Intermediate",
    category: "Video",
    gradient: "bg-gradient-secondary"
  },
  {
    id: 6,
    title: "YouTube Creator Masterclass",
    description: "Build a successful YouTube channel from scratch to monetization",
    icon: Youtube,
    price: "$149",
    rating: 4.9,
    students: "4.1k",
    duration: "12 weeks",
    level: "All Levels",
    category: "Content",
    gradient: "bg-gradient-primary"
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">Featured Courses</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Master In-Demand Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our expertly crafted courses designed to accelerate your career 
            and unlock new opportunities in tech and content creation.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card 
              key={course.id} 
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${course.gradient} rounded-lg flex items-center justify-center`}>
                    <course.icon size={24} className="text-white" />
                  </div>
                  <Badge variant="outline">{course.category}</Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-primary fill-current" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Level Badge */}
                <Badge variant="secondary" className="w-fit">
                  {course.level}
                </Badge>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4">
                  <div className="text-2xl font-bold text-primary">
                    {course.price}
                  </div>
                  <Button variant="hero" size="sm" className="group-hover:shadow-glow">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="text-lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;