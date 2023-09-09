import React from 'react';
import './Projects.css'; // Import a CSS file for styling

function Projects() {
  // Define an array of project objects
  const projectsData = [
    {
      name: 'File sharing Application',
      description: 'Web-based File Sharing Application enabling seamless sharing of various file types.',
      techStack: 'Tech stack: Flask, CSS, HTML, JavaScript, Google Cloud Platform.',
    },
    {
      name: 'Artificial Neural Network',
      description: 'Developed a Handwritten Digit Recognition Neural Network API from Scratch, enabling construction and testing of various neural network architectures.',
      techStack: 'Tech stack: Python, NumPy.',
    },
    {
      name: 'CNN Architectures for Emotion Recognition',
      description: 'Explored and implemented Convolutional Neural Network (CNN) Architectures for Emotion Recognition.',
      techStack: 'Tech stack: OpenCV, Matplotlib, Keras, TensorFlow, NumPy, Pandas, etc.',
    },
    {
      name: 'Restaurant Chain Database',
      description: 'Developed and executed a comprehensive restaurant chain database project involving multiple phases over the course of a semester.',
      techStack: 'Tech-stack: Oracle SQL.',
    },
    // Add more project objects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>{project.techStack}</p>
        </div>
      ))}
      {/* Add more project cards as needed */}
    </section>
  );
}

export default Projects;
