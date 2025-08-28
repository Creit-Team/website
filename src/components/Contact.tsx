import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Calendar,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "info@creittech.com",
      link: "mailto:info@creittech.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us", 
      content: "+234 (803) 416-6561",
      link: "tel:+2348034166561"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Business Location",
      content: "Katampe Road, Federal Capital Territory, Abuja.",
      link: "#"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM GMT",
      link: "#"
    }
  ];

  const services = [
    "Software Development",
    "Digital Marketing", 
    "Research Solutions",
    "Creit Tech Academy",
    "Consultation"
  ];

  return (
    <section id="contact" className="py-24 bg-creit-accent-light/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-4xl font-bold text-foreground mb-6">
            Get In <span className="text-creit-primary">Touch</span>
          </h2>
          <p className="text-m text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your startup/business with cutting-edge technology solutions? 
            Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-creit-accent rounded-xl text-creit-navy">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      {info.link !== "#" ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-creit-primary transition-colors duration-300"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-creit-gradient rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <Button 
                  variant="hero" 
                  className="w-full justify-between"
                  onClick={() => window.open("mailto:info@creittech.com", "_blank")}
                >
                  <div className="flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send Email
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-between border-white text-white hover:bg-white hover:text-creit-navy"
                  onClick={() => window.open("tel:+15551234567", "_blank")}
                >
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Call
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-creit-card border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 h-12 focus:ring-creit-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 h-12 focus:ring-creit-primary"
                        placeholder="youremail@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-foreground font-medium">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-2 h-12 focus:ring-creit-primary"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-foreground font-medium">Service Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-creit-primary"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-2 focus:ring-creit-primary resize-none"
                      placeholder="Tell us about your project, goals, and how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="default" 
                    size="lg" 
                    className="w-full group"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-12 shadow-creit-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-m text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 50+ successful startups and businesses that have transformed their operations with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                onClick={() => window.open("mailto:info@creittech.com", "_blank")}
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("tel:+2348034166561", "_blank")}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;