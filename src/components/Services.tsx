import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  TrendingUp, 
  Search, 
  Target, 
  BarChart, 
  Users,
  FileText,
  Lightbulb,
  Database,
  GraduationCap
} from "lucide-react";

const Services = () => {
  const softwareServices = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Applications",
      description: "Custom web applications built with modern frameworks like React, Angular, and Vue.js for optimal performance and user experience.",
      features: ["Responsive Design", "Progressive Web Apps", "Real-time Features", "API Integration"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless performance and intuitive design.",
      features: ["Native Development", "Cross-platform Solutions", "App Store Optimization", "Push Notifications"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "SaaS Platforms",
      description: "Scalable Software-as-a-Service platforms with multi-tenancy, subscription management, and enterprise-grade security.",
      features: ["Multi-tenant Architecture", "Subscription Management", "Advanced Analytics", "Enterprise Security"]
    }
  ];

  const digitalServices = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Brand Identity Design",
      description: "Complete brand identity packages including logo design, color schemes, typography, and brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO & Google Ads",
      description: "Comprehensive search engine optimization and Google Ads management to maximize your online visibility and ROI.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "PPC Campaigns"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns across all platforms to build engagement and drive conversions.",
      features: ["Content Strategy", "Social Advertising", "Community Management", "Analytics & Reporting"]
    }
  ];

  const researchServices = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Idea Validation",
      description: "Comprehensive market research and validation services to assess the viability of your business ideas and concepts.",
      features: ["Market Analysis", "Competitor Research", "User Surveys", "Feasibility Studies"]
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Industry & Market Studies",
      description: "In-depth industry analysis and market research to inform strategic decisions and identify growth opportunities.",
      features: ["Industry Analysis", "Market Trends", "SWOT Analysis", "Strategic Insights"]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Insights & Analytics",
      description: "User research and behavioral analytics to optimize product development and enhance user experience.",
      features: ["User Research", "Behavioral Analytics", "UX Testing", "Data Visualization"]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Academic Research & Project Work",
      description: "Professional academic research support and project consulting for educational institutions and research organizations.",
      features: ["Academic Writing", "Research Methodology", "Data Analysis", "Project Consulting"]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-creit-accent-light/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-4xl font-bold text-foreground mb-6">
            Our <span className="text-creit-primary">Services</span>
          </h2>
          <p className="text-m text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to transform your business digitally, 
            enhance your market presence, and drive sustainable growth.
          </p>
        </div>

        {/* Software Development Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            <Code className="inline-block mr-3 h-8 w-8 text-creit-primary" />
            Software Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-creit-glow transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-creit-primary rounded-2xl text-creit-accent-light group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-creit-navy rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Digital Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            <TrendingUp className="inline-block mr-3 h-8 w-8 text-creit-primary" />
            Digital and Growth Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-creit-glow transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-creit-primary rounded-2xl text-creit-accent-light group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-creit-navy rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            <Database className="inline-block mr-3 h-8 w-8 text-creit-primary" />
            Research Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-creit-glow transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-creit-primary rounded-2xl text-creit-accent-light group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-creit-navy rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-creit-gradient rounded-3xl p-12 text-white">
          {/* <GraduationCap className="mx-auto h-16 w-16 mb-6 text-creit-accent" /> */}
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-m mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our comprehensive IT solutions can accelerate your digital transformation and drive sustainable growth.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;