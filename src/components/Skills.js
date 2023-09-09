import React from 'react';
import './skills.css';

function Skills() {
  const skillsList = [
    'Python',
    'Java',
    'Google Cloud Platform',
    'Oracle SQL',
    'Statistics and Probability',
    'Git',
    'TensorFlow',
    'Keras',
    'NumPy',
    'Pandas',
    'Flask',
    'Front-end',
    'React',
  ];

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
