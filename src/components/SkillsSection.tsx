
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'ReactJS', level: 92 },
    { name: 'Node.js', level: 88 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'MySQL Databases', level: 82 },
  ];

  const softSkills = [
    { name: 'Communication', icon: '🗣️' },
    { name: 'Teamwork', icon: '👥' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Adaptability', icon: '🔄' },
    { name: 'Creativity', icon: '🎨' },
    { name: 'Time Management', icon: '⏱️' },
  ];

  return (
    <section id="skills" className="py-16 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Professional Skills</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <Card key={index} className="bg-card hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="text-3xl">{skill.icon}</div>
                    <div>
                      <h4 className="font-medium">{skill.name}</h4>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {['HTML5', 'CSS3', 'JavaScript', 'MongoDB', 'ReactJS', 'Node.js', 'Express.js', 'MySQL', 'AWS'].map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-card rounded-full border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
