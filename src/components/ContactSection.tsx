import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/yourusername"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your next data project or explore collaboration opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <Card key={index} className="shadow-card hover:shadow-card-hover transition-smooth">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              );

              return item.link ? (
                <a key={index} href={item.link} className="block">
                  {content}
                </a>
              ) : content;
            })}
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Let's Collaborate</h3>
            
            <Card className="shadow-card bg-gradient-card">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold mb-4">Ready to Start a Project?</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you need data analysis, system architecture, or strategic insights, 
                  I'm here to help turn your data into competitive advantage.
                </p>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-hero text-white shadow-hero hover:shadow-card-hover transition-smooth mb-4"
                  onClick={() => window.location.href = 'mailto:your.email@example.com'}
                >
                  Start a Conversation
                  <Mail className="ml-2 h-5 w-5" />
                </Button>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-border">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        className="hover:text-primary transition-smooth"
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        <Icon className="h-5 w-5" />
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;