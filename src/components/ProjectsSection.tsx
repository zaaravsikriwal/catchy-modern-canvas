
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Github, Eye, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const categories = ['All', 'Web App', 'Mobile', 'UI/UX', 'Other'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      demoLink: '#',
      githubLink: '#',
      category: 'Web App',
      tags: ['React', 'Tailwind CSS', 'TypeScript']
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product management, cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      demoLink: '#',
      githubLink: '#',
      category: 'Web App',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      title: 'Travel App UI',
      description: 'Designed and developed a mobile app interface for a travel booking platform.',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363',
      demoLink: '#',
      githubLink: '#',
      category: 'UI/UX',
      tags: ['Figma', 'UI Design']
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A productivity application to help users organize their tasks and projects.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      demoLink: '#',
      githubLink: '#',
      category: 'Mobile',
      tags: ['React Native', 'Firebase']
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Real-time weather forecast application with location-based data.',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
      demoLink: '#',
      githubLink: '#',
      category: 'Web App',
      tags: ['JavaScript', 'API Integration']
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A full-stack blogging platform with user authentication and content management.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      demoLink: '#',
      githubLink: '#',
      category: 'Web App',
      tags: ['Next.js', 'Prisma', 'PostgreSQL']
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
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
