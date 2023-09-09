import React from 'react';

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <ul>
        {/* Master's Degree */}
        <li>
          <strong>Masters in Computer Science</strong> - UT Arlington
          <p>Arlington, TX - 01/2022 – 12/2023</p>
          <p>Specialized in Big Data and Artificial Intelligence.</p>
        </li>
        {/* Bachelor's Degree */}
        <li>
          <strong>Bachelor’s in Mechanical Engineering</strong> - Acharya Nagarjuna University
          <p>Guntur, India - 10/2013 – 05/20XX</p>
        </li>
        {/* Additional Coursework */}
        <li>
          <strong>Coursework:</strong>
          <ul>
            <li>Data Structures and Algorithms</li>
            <li>Data Modeling and Analysis Techniques</li>
            <li>Database Systems</li>
            <li>Data Mining</li>
            <li>Computer Networking</li>
            <li>Machine Learning</li>
            <li>Neural Networks</li>
            <li>Cloud Computing</li>
            <li>Computer Vision</li>
            <li>Distributed Systems</li>
            <li>Artificial Intelligence</li>
          </ul>
        </li>
        {/* Add more education items as needed */}
      </ul>
    </section>
  );
}

export default Education;
