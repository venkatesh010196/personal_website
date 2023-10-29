import React from 'react';
import './Blogs.css'; // Import a CSS file for styling

function Blogs() {
  // Define an array of blog objects
  const blogsData = [
    {
      name: 'Titanic passenger classification',
      description: 'kaggle competition',
      url: 'https://github.com/venkatesh010196/classification_titanicdata/blob/6c8a9260afaed9ee20572b89ccb2c16e03e7526d/classification.ipynb',
    },
    {
      name: 'Dog classifier',
      description: 'kaggle competetion',
      url: 'https://github.com/yourusername/blog2',
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
