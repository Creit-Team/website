import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Zap, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation Focus",
      description: "We stay at the forefront of technology, delivering cutting-edge solutions that drive digital transformation."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric Approach", 
      description: "Every solution is tailored to meet specific client needs, ensuring maximum value and satisfaction."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in development, testing, and delivery of all our solutions."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Agile Methodology",
      description: "Fast, flexible, and efficient project delivery using proven agile development methodologies."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-4xl font-bold text-foreground mb-6">
            About <span className="text-creit-primary">Creit Technologies</span>
          </h2>
          <p className="text-m text-justify text-muted-foreground leading-relaxed">
            We provide software development, digital services and research solutions, by building secure, scalable software products including web applications, mobile apps, and SaaS platforms.
            Creit also strengthens digital presence through brand identity design, websites, UI/UX, and media content.
            Our Business Growth services cover SEO, Google Ads, social media ads, conversion optimization, analytics, and online authority management.
            The research team delivers idea validation, industry and market studies, user insights for product development, and academic research support.       </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-m text-justify text-muted-foreground leading-relaxed">
                To deliver secure software development, digital marketing, and research solutions that drive measurable growth for businesses and startups, while building African tech talent through hands-on training in software engineering, data, and design, amongst other tech related programs.              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Our Vision</h3>
              <p className="text-m text-justify text-muted-foreground leading-relaxed">
                To be the leading African technology company recognized worldwide for software, digital growth, and research solutions, while creating opportunities for women and young people in technology through education and inclusion.
              </p>
            </div>
          </div>

          <div className="bg-creit-gradient rounded-3xl p-8 text-white">
            <h4 className="text-xl font-bold mb-6">Why Choose Creit?</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-m space-x-3">
                <div className="w-2 h-2 bg-creit-accent-light rounded-full"></div>
                <span>Expert team with over 10+ years experience</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-creit-accent-light rounded-full"></div>
                <span>Proven track record of 50+ successful projects</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-creit-accent-light rounded-full"></div>
                <span>24/7 support and maintenance services</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-creit-accent-light rounded-full"></div>
                <span>Cutting-edge technologies and best practices</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-creit-accent-light rounded-full"></div>
                <span>Transparent communication and agile methodology</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Values */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-16">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-creit-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-creit-primary rounded-2xl text-creit-accent-light group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">{value.title}</h4>
                  <p className="text-muted-foreground text-m leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;