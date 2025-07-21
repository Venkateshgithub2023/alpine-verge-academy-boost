import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Clock, Star } from "lucide-react";

const RoadmapsSection = () => {
  const roadmaps = {
    python: {
      title: "Python Development",
      description: "Complete roadmap to become a Python developer",
      color: "bg-gradient-to-r from-yellow-500 to-blue-600",
      steps: [
        { title: "Python Basics", duration: "2 weeks", status: "completed", topics: ["Variables", "Data Types", "Control Flow", "Functions"] },
        { title: "OOP & Data Structures", duration: "3 weeks", status: "current", topics: ["Classes", "Objects", "Lists", "Dictionaries"] },
        { title: "Web Development", duration: "4 weeks", status: "upcoming", topics: ["Django", "Flask", "APIs", "Databases"] },
        { title: "Advanced Topics", duration: "3 weeks", status: "upcoming", topics: ["Machine Learning", "Data Science", "Testing", "Deployment"] }
      ]
    },
    java: {
      title: "Java Development",
      description: "Master Java programming and enterprise development",
      color: "bg-gradient-to-r from-red-500 to-orange-600",
      steps: [
        { title: "Java Fundamentals", duration: "3 weeks", status: "completed", topics: ["Syntax", "OOP", "Collections", "Exception Handling"] },
        { title: "Spring Framework", duration: "4 weeks", status: "current", topics: ["Spring Boot", "Spring MVC", "Spring Data", "Security"] },
        { title: "Microservices", duration: "3 weeks", status: "upcoming", topics: ["REST APIs", "Docker", "Kubernetes", "Cloud"] },
        { title: "Enterprise Java", duration: "2 weeks", status: "upcoming", topics: ["JPA", "Hibernate", "Testing", "DevOps"] }
      ]
    },
    c: {
      title: "C Programming",
      description: "Learn system programming with C language",
      color: "bg-gradient-to-r from-blue-500 to-indigo-600",
      steps: [
        { title: "C Basics", duration: "2 weeks", status: "completed", topics: ["Syntax", "Variables", "Functions", "Arrays"] },
        { title: "Pointers & Memory", duration: "3 weeks", status: "current", topics: ["Pointers", "Dynamic Memory", "Structures", "File I/O"] },
        { title: "Data Structures", duration: "3 weeks", status: "upcoming", topics: ["Linked Lists", "Trees", "Graphs", "Algorithms"] },
        { title: "System Programming", duration: "2 weeks", status: "upcoming", topics: ["OS Concepts", "Threads", "Sockets", "Embedded"] }
      ]
    },
    design: {
      title: "Digital Design",
      description: "Master Photoshop and Premiere Pro for creative projects",
      color: "bg-gradient-to-r from-purple-500 to-pink-600",
      steps: [
        { title: "Photoshop Basics", duration: "2 weeks", status: "completed", topics: ["Interface", "Tools", "Layers", "Basic Editing"] },
        { title: "Advanced Photoshop", duration: "3 weeks", status: "current", topics: ["Photo Manipulation", "Digital Art", "Typography", "Effects"] },
        { title: "Premiere Pro", duration: "3 weeks", status: "upcoming", topics: ["Video Editing", "Transitions", "Color Grading", "Audio"] },
        { title: "Creative Projects", duration: "2 weeks", status: "upcoming", topics: ["Brand Design", "Social Media", "Portfolio", "Client Work"] }
      ]
    },
    youtube: {
      title: "YouTube Creator",
      description: "Build and grow a successful YouTube channel",
      color: "bg-gradient-to-r from-red-500 to-red-700",
      steps: [
        { title: "Channel Setup", duration: "1 week", status: "completed", topics: ["Channel Creation", "Branding", "Equipment", "Software"] },
        { title: "Content Creation", duration: "3 weeks", status: "current", topics: ["Video Planning", "Filming", "Editing", "Thumbnails"] },
        { title: "Growth Strategies", duration: "3 weeks", status: "upcoming", topics: ["SEO", "Analytics", "Audience", "Monetization"] },
        { title: "Advanced Creator", duration: "2 weeks", status: "upcoming", topics: ["Brand Deals", "Live Streaming", "Community", "Scaling"] }
      ]
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'current': return <Star className="w-5 h-5 text-yellow-500" />;
      default: return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed': return <Badge variant="outline" className="text-green-600 border-green-300">Completed</Badge>;
      case 'current': return <Badge variant="outline" className="text-yellow-600 border-yellow-300">In Progress</Badge>;
      default: return <Badge variant="outline" className="text-muted-foreground border-muted">Upcoming</Badge>;
    }
  };

  return (
    <section id="roadmaps" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Learning Roadmaps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our structured learning paths to master new skills step by step
          </p>
        </div>

        <Tabs defaultValue="python" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="java">Java</TabsTrigger>
            <TabsTrigger value="c">C Programming</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="youtube">YouTube</TabsTrigger>
          </TabsList>

          {Object.entries(roadmaps).map(([key, roadmap]) => (
            <TabsContent key={key} value={key} className="space-y-6">
              <div className="text-center mb-8">
                <div className={`inline-block p-1 rounded-lg ${roadmap.color} mb-4`}>
                  <div className="bg-background px-6 py-3 rounded-md">
                    <h3 className="text-2xl font-bold">{roadmap.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground">{roadmap.description}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {roadmap.steps.map((step, index) => (
                  <Card key={index} className={`relative transition-all duration-300 hover:shadow-lg ${
                    step.status === 'current' ? 'ring-2 ring-primary' : ''
                  }`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        {getStatusIcon(step.status)}
                        {getStatusBadge(step.status)}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-muted-foreground">Key Topics:</h4>
                        <div className="flex flex-wrap gap-1">
                          {step.topics.map((topic, topicIndex) => (
                            <Badge key={topicIndex} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    
                    {index < roadmap.steps.length - 1 && (
                      <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                        <div className="w-6 h-0.5 bg-border"></div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default RoadmapsSection;