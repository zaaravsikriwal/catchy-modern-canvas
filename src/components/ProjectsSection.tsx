
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Github, Eye, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const categories = ['All', 'Frontend', 'Full Stack'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Amazon Clone',
      description: 'A frontend replica of Amazon with responsive design and core UI features.',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1',
      demoLink: '#',
      githubLink: '#',
      category: 'Frontend',
      tags: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      id: 2,
      title: 'Spotify Clone',
      description: 'A frontend implementation of the Spotify music platform with similar UI/UX.',
      image: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7',
      demoLink: '#',
      githubLink: '#',
      category: 'Frontend',
      tags: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      id: 3,
      title: 'Netflix Clone',
      description: 'A full stack implementation of Netflix with user authentication and content management.',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37',
      demoLink: '#',
      githubLink: '#',
      category: 'Full Stack',
      tags: ['React', 'Node.js', 'Express', 'MongoDB']
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-16">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? 'bg-primary' : ''}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="project-card overflow-hidden bg-card">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs py-1 px-2 bg-secondary rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex justify-between">
                <a 
                  href={project.demoLink}
                  className="flex items-center text-sm font-medium text-primary hover:underline"
                >
                  <Eye className="mr-1 h-4 w-4" /> 
                  Live Demo
                </a>
                <a 
                  href={project.githubLink}
                  className="flex items-center text-sm font-medium text-foreground hover:text-primary"
                >
                  <Github className="mr-1 h-4 w-4" /> 
                  Source Code
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
