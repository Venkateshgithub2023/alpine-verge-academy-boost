import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, BookOpen, Award, Target } from "lucide-react";

const CourseDetailTabs = () => {
  const courses = {
    python: {
      title: "Python Programming Mastery",
      duration: "45 Days",
      price: "$99",
      students: "2,847",
      rating: "4.9",
      gradient: "from-yellow-500 to-blue-600",
      modules: [
        { week: "Week 1-2", title: "Python Fundamentals", topics: ["Variables & Data Types", "Control Structures", "Functions", "Error Handling"] },
        { week: "Week 3-4", title: "Object-Oriented Programming", topics: ["Classes & Objects", "Inheritance", "Polymorphism", "Encapsulation"] },
        { week: "Week 5-6", title: "Data Structures & Algorithms", topics: ["Lists & Dictionaries", "File Handling", "Algorithms", "Data Processing"] },
        { week: "Week 7", title: "Real-World Projects", topics: ["Web Scraping", "API Integration", "Database Connection", "Portfolio Project"] }
      ],
      skills: ["Problem Solving", "Web Development", "Data Analysis", "Automation"],
      projects: ["Personal Finance Tracker", "Weather App", "Web Scraper", "Data Visualization Tool"]
    },
    java: {
      title: "Java Enterprise Development",
      duration: "40 Days",
      price: "$129",
      students: "1,923",
      rating: "4.8",
      gradient: "from-red-500 to-orange-600",
      modules: [
        { week: "Week 1-2", title: "Java Fundamentals", topics: ["Syntax & OOP", "Collections Framework", "Exception Handling", "Multithreading"] },
        { week: "Week 3-4", title: "Spring Framework", topics: ["Spring Boot", "Dependency Injection", "Spring MVC", "RESTful APIs"] },
        { week: "Week 5-6", title: "Database & Security", topics: ["JPA/Hibernate", "Spring Security", "Testing", "Microservices"] },
        { week: "Week 7", title: "Enterprise Project", topics: ["E-commerce App", "Deployment", "Performance", "Best Practices"] }
      ],
      skills: ["Enterprise Development", "Microservices", "Database Design", "Security"],
      projects: ["E-commerce Platform", "Banking System", "Task Management App", "Inventory System"]
    },
    c: {
      title: "C Programming & System Development",
      duration: "35 Days",
      price: "$89",
      students: "1,456",
      rating: "4.7",
      gradient: "from-blue-500 to-indigo-600",
      modules: [
        { week: "Week 1-2", title: "C Language Basics", topics: ["Syntax & Variables", "Functions", "Arrays & Strings", "Pointers"] },
        { week: "Week 3-4", title: "Advanced Concepts", topics: ["Dynamic Memory", "Structures", "File I/O", "Preprocessor"] },
        { week: "Week 4-5", title: "Data Structures", topics: ["Linked Lists", "Stacks & Queues", "Trees", "Graphs"] },
        { week: "Week 5", title: "System Programming", topics: ["Operating Systems", "Embedded Systems", "Performance", "Real Project"] }
      ],
      skills: ["System Programming", "Memory Management", "Algorithm Design", "Embedded Systems"],
      projects: ["Memory Allocator", "File System", "Game Engine", "Embedded Controller"]
    },
    photoshop: {
      title: "Adobe Photoshop Mastery",
      duration: "30 Days",
      price: "$79",
      students: "3,542",
      rating: "4.9",
      gradient: "from-purple-500 to-pink-600",
      modules: [
        { week: "Week 1", title: "Photoshop Fundamentals", topics: ["Interface & Tools", "Layers", "Selections", "Basic Adjustments"] },
        { week: "Week 2", title: "Photo Editing", topics: ["Color Correction", "Retouching", "Healing Tools", "Filters"] },
        { week: "Week 3", title: "Digital Art & Design", topics: ["Drawing Tools", "Typography", "Compositing", "Effects"] },
        { week: "Week 4", title: "Professional Projects", topics: ["Brand Design", "Social Media", "Print Design", "Portfolio"] }
      ],
      skills: ["Photo Editing", "Digital Art", "Brand Design", "Creative Composition"],
      projects: ["Brand Identity", "Social Media Campaign", "Photo Manipulation", "Digital Artwork"]
    },
    premiere: {
      title: "Adobe Premiere Pro Video Editing",
      duration: "35 Days",
      price: "$99",
      students: "2,234",
      rating: "4.8",
      gradient: "from-purple-600 to-blue-600",
      modules: [
        { week: "Week 1-2", title: "Video Editing Basics", topics: ["Interface Setup", "Importing Media", "Timeline Editing", "Basic Cuts"] },
        { week: "Week 3", title: "Advanced Editing", topics: ["Transitions", "Effects", "Color Grading", "Audio Mixing"] },
        { week: "Week 4", title: "Motion Graphics", topics: ["Titles & Graphics", "Keyframe Animation", "Green Screen", "Stabilization"] },
        { week: "Week 5", title: "Professional Production", topics: ["Workflow Optimization", "Export Settings", "Client Projects", "Portfolio Reel"] }
      ],
      skills: ["Video Editing", "Color Grading", "Motion Graphics", "Audio Production"],
      projects: ["Short Film", "Commercial Ad", "Music Video", "Documentary"]
    },
    youtube: {
      title: "YouTube Creator Bootcamp",
      duration: "30 Days",
      price: "$69",
      students: "4,123",
      rating: "4.9",
      gradient: "from-red-500 to-red-700",
      modules: [
        { week: "Week 1", title: "Channel Foundation", topics: ["Channel Setup", "Branding", "Equipment", "Content Planning"] },
        { week: "Week 2", title: "Content Creation", topics: ["Video Production", "Editing Basics", "Thumbnails", "SEO Optimization"] },
        { week: "Week 3", title: "Growth Strategies", topics: ["Analytics", "Audience Building", "Collaborations", "Social Media"] },
        { week: "Week 4", title: "Monetization", topics: ["AdSense Setup", "Sponsorships", "Products", "Scaling Strategies"] }
      ],
      skills: ["Content Creation", "Video Marketing", "Audience Building", "Brand Development"],
      projects: ["Channel Launch", "Viral Video", "Brand Partnership", "Monetization Setup"]
    }
  };

  return (
    <section id="course-details" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Course Details & Curriculum
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore comprehensive course content and start your learning journey
          </p>
        </div>

        <Tabs defaultValue="python" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="java">Java</TabsTrigger>
            <TabsTrigger value="c">C Program</TabsTrigger>
            <TabsTrigger value="photoshop">Photoshop</TabsTrigger>
            <TabsTrigger value="premiere">Premiere</TabsTrigger>
            <TabsTrigger value="youtube">YouTube</TabsTrigger>
          </TabsList>

          {Object.entries(courses).map(([key, course]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              {/* Course Header */}
              <Card className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-10`}></div>
                <CardHeader className="relative">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-3xl mb-2">{course.title}</CardTitle>
                      <CardDescription className="text-lg">
                        Master professional skills in {course.duration.toLowerCase()}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">{course.price}</div>
                        <div className="text-sm text-muted-foreground">One-time payment</div>
                      </div>
                      <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                        Purchase Course
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 mt-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-medium">{course.duration} Duration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="font-medium">{course.students} Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-medium">{course.rating} Rating</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Curriculum */}
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Course Curriculum
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {course.modules.map((module, index) => (
                        <Card key={index} className="border-l-4 border-l-primary">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">{module.title}</CardTitle>
                              <Badge variant="outline">{module.week}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {module.topics.map((topic, topicIndex) => (
                                <div key={topicIndex} className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  <span className="text-sm">{topic}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Skills & Projects */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Skills You'll Learn
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {course.skills.map((skill, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-primary" />
                            <span className="font-medium">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Portfolio Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {course.projects.map((project, index) => (
                          <Badge key={index} variant="secondary" className="block text-center py-2">
                            {project}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`bg-gradient-to-r ${course.gradient} text-white`}>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
                      <p className="mb-4 opacity-90">Join thousands of students and transform your career</p>
                      <Button size="lg" variant="secondary" className="w-full">
                        Enroll Now - {course.price}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CourseDetailTabs;