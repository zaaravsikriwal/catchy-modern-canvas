
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 to-transparent z-0"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mt-12">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-2xl -z-10"></div>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold">Get to know me!</h3>
            
            <p className="text-lg text-muted-foreground">
              Hello! I'm John, a passionate Frontend Developer based in New York. 
              I enjoy transforming complex problems into simple, beautiful, and intuitive designs.
            </p>
            
            <p className="text-lg text-muted-foreground">
              With over 5 years of experience in web development, I specialize in building responsive 
              web applications using modern JavaScript frameworks like React and Vue. My approach combines 
              technical expertise with a strong sense of design to create engaging user experiences.
            </p>
            
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or enjoying outdoor activities. I'm always looking for new challenges and opportunities 
              to grow professionally.
            </p>
            
            <div className="pt-4">
              <Button className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="p-4 border border-border rounded-lg bg-card">
                <h4 className="text-xl font-bold text-primary">Education</h4>
                <p className="text-muted-foreground mt-2">B.S. in Computer Science</p>
                <p className="text-muted-foreground">Stanford University</p>
              </div>
              <div className="p-4 border border-border rounded-lg bg-card">
                <h4 className="text-xl font-bold text-primary">Experience</h4>
                <p className="text-muted-foreground mt-2">5+ Years</p>
                <p className="text-muted-foreground">Frontend Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
