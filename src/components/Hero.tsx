import { Button } from "@/components/ui/button";
import { Play, Star, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Elevate Your 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Skills</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Unlock Success with <span className="text-primary">Alpine Verge</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Transform your future with expert-led courses in coding, design, and content creation. 
                Join thousands of students who've accelerated their careers with our comprehensive programs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                <Play className="mr-2" size={20} />
                Start Learning Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                View Free Courses
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-primary mr-2" size={24} />
                  <span className="text-2xl font-bold text-primary">10K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="text-primary mr-2" size={24} />
                  <span className="text-2xl font-bold text-primary">50+</span>
                </div>
                <p className="text-sm text-muted-foreground">Courses</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="text-primary mr-2" size={24} />
                  <span className="text-2xl font-bold text-primary">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative animate-float">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating Cards */}
              <div className="absolute top-4 right-4 bg-card border border-border rounded-lg p-4 shadow-card animate-float" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
                  <div>
                    <p className="text-sm font-semibold">Python Mastery</p>
                    <p className="text-xs text-muted-foreground">95% Complete</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-4 bg-card border border-border rounded-lg p-4 shadow-card animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-secondary rounded-full"></div>
                  <div>
                    <p className="text-sm font-semibold">Video Editing Pro</p>
                    <p className="text-xs text-muted-foreground">New Lesson</p>
                  </div>
                </div>
              </div>

              {/* Main Hero Card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-glow">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Award size={40} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">Master New Skills</h3>
                    <p className="text-muted-foreground">Expert-designed curriculum</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Course Progress</span>
                      <span className="text-sm text-primary">78%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;