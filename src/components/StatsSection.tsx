import { Trophy, Users, BookOpen, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Students",
    description: "Learning and growing with us"
  },
  {
    icon: BookOpen,
    value: "50+",
    label: "Expert Courses",
    description: "Across multiple domains"
  },
  {
    icon: Trophy,
    value: "95%",
    label: "Success Rate",
    description: "Students achieving their goals"
  },
  {
    icon: Award,
    value: "500+",
    label: "Certifications",
    description: "Industry-recognized certificates"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their careers with Alpine Verge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <stat.icon size={32} className="text-primary-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </h3>
                <h4 className="text-lg font-semibold text-foreground">
                  {stat.label}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;