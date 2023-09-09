import React from 'react';
import './Experience.css'; // Import a CSS file for styling

function Experience() {
  const headingStyle = {
    textAlign: 'center', // Center-align the text
  };

  return (
    <section id="experience">
      <h2 style={headingStyle}>Experience</h2>
      <table className="experience-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Date</th>
            <th>Job Description</th>
          </tr>
        </thead>
        <tbody>
          {/* First Job Experience */}
          <tr>
            <td><strong>Associate</strong></td>
            <td>State Bank of India</td>
            <td>01/2018 – 12/2021</td>
            <td>
              <ul>
                <li>Collaborated with manager to verify documents and assess credit risks to ensure compliance.</li>
                <li>Managed and oversaw the handling of cash and gold.</li>
                <li>Increased sales by offering advice on purchases and promoting digital products.</li>
              </ul>
            </td>
          </tr>
          {/* Second Job Experience */}
          <tr>
            <td><strong>Software Engineering Intern</strong></td>
            <td>Sedin Technologies</td>
            <td>07/2017 – 01/2018</td>
            <td>
              <p>Creating a Proof of Concept (POC) for a document management system targeting a Qatar-based oil company.</p>
            </td>
          </tr>
          {/* Add more experience items as needed */}
        </tbody>
      </table>
    </section>
  );
}

export default Experience;
