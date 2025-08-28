import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  Clock, 
  Award,
  ExternalLink,
  Zap
} from "lucide-react";

const Academy = () => {
  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "1-on-1 & Group Sessions",
      description: "Personalized learning with expert mentors"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Virtual sessions around your availability"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Certification",
      description: "Recognized certificates upon completion"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real Project Experience",
      description: "Build professional portfolio with actual projects"
    }
  ];

  const courses = [
    "UI/UX Design",
    "Front-End Development", 
    "Back-End Development",
    "Data Analysis"
  ];

  return (
    <section id="academy" className="py-15 bg-creit-accent-light/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-creit-primary rounded-2xl">
                  <GraduationCap className="h-8 w-8 text-creit-accent-light" />
                </div>
                <span className="text-creit-navy font-semibold text-m">An Extension of Creit Technologies</span>
              </div>
              
              <h2 className="text-4xl lg:text-4xl font-bold text-foreground">
                Creit <span className="text-creit-primary">Tech Academy</span>
              </h2>
              
              <p className="text-m text-muted-foreground leading-relaxed">
                As part of our commitment to digital transformation, Creit Tech Academy (CTA) 
                provides comprehensive training programs in cutting-edge technologies. We empower 
                individuals and organizations with the skills needed to thrive in today's digital landscape.
              </p>
            </div>

            {/* Course List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Available Programs:</h3>
              <div className="grid grid-cols-2 gap-3">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-creit-navy rounded-full"></div>
                    <span className="text-muted-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="group"
                onClick={() => window.open('https://academy.creit.ng', '_blank')}
              >
                Visit CTA Website
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-creit-glow transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-creit-accent rounded-xl text-creit-navy group-hover:bg-creit-gradient group-hover:text-white transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-creit-gradient rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-white/80 text-sm">Students Trained</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">95%</div>
                  <div className="text-white/80 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;