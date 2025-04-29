
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
                  src="/lovable-uploads/397c3a35-30ee-44e8-9bac-7c5e2fa3637d.png" 
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
              Hello! I'm Aarav Kumar, a passionate Full Stack Developer based in Bihar, India. 
              I enjoy transforming ideas into functional and visually appealing web applications.
            </p>
            
            <p className="text-lg text-muted-foreground">
              With expertise in both frontend and backend technologies, I specialize in building responsive 
              web applications using modern JavaScript frameworks like React along with backend technologies 
              like Node.js and Express. I'm dedicated to writing clean, efficient code that delivers exceptional 
              user experiences.
            </p>
            
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or enhancing my skills through continuous learning. I'm always eager to take on new 
              challenges and collaborate on innovative projects.
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
                <p className="text-muted-foreground mt-2">BCA</p>
                <p className="text-muted-foreground">Lovely Professional University</p>
              </div>
              <div className="p-4 border border-border rounded-lg bg-card">
                <h4 className="text-xl font-bold text-primary">Role</h4>
                <p className="text-muted-foreground mt-2">Full Stack Developer</p>
                <p className="text-muted-foreground">Frontend & Backend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
