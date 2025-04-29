
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-1 w-10 bg-primary rounded-full"></div>
              <p className="text-lg font-medium">Hello, I'm</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Aarav Kumar</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground">
              Frontend Developer
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              I create engaging, responsive web experiences with modern technologies.
              Let's bring your vision to life with clean code and beautiful design.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="glass p-1 rounded-full w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto shadow-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Profile" 
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            {/* Decoration elements */}
            <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-purple-500 blur-2xl opacity-40"></div>
            <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-primary blur-2xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
