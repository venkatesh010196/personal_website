import React from 'react';
import './Blogs.css'; // Import a CSS file for styling

function Blogs() {
  // Define an array of blog objects
  const blogsData = [
    {
      name: 'Titanic passenger classification',
      description: 'kaggle competition',
      url: 'https://github.com/venkatesh010196/classification_titanicdata/blob/main/classification.ipynb',

    },
    
    {
      name: 'Dog classifier',
      description: 'kaggle competetion',
      url: 'https://github.com/venkatesh010196/Flower-classification-assignment/blob/main/flower-classification.ipynb',
    },
    // Add more blog objects as needed
  ];

  return (
    <section id="blogs">
      <h2>Blogs</h2>
      {blogsData.map((blog, index) => (
        <div key={index} className="blog-card">
          <h3>{blog.name}</h3>
          <p>{blog.description}</p>
          <a href={blog.url} target="_blank" rel="noopener noreferrer">
            View Blog
          </a>
        </div>
      ))}
      {/* Add more blog cards as needed */}
    </section>
  );
}

export default Blogs;
