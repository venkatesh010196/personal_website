import React from 'react';
import './Blogs.css'; // Import a CSS file for styling

function Blogs() {
  // Define an array of blog objects
  const blogsData = [
    {
      name: 'Titanic passenger classification',
      description: 'Term project',
      filename: 'blog1.html',
    },
    {
      name: 'Flower classifier',
      description: 'Assignment-1',
      filename: 'blog2.html',
    },
    // Add more blog objects as needed
  ];

  // Function to open a blog in a new tab
  const openBlogInNewTab = (filename) => {
    const blogUrl = process.env.PUBLIC_URL + `/blogs/titanic_data.html`;
    window.open(blogUrl, '_blank');
  };

  return (
    <section id="blogs">
      <h2>Blogs</h2>
      {blogsData.map((blog, index) => (
        <div key={index} className="blog-card">
          <h3>{blog.name}</h3>
          <p>{blog.description}</p>
          <a className="shared-link" href={blog.url} target="_blank" rel="noopener noreferrer">
            View jupyter Notebook
          </a>
          <button onClick={() => openBlogInNewTab(blog.filename)}>
            View Blog
          </button>
        </div>
      ))}
      {/* Add more blog cards as needed */}
    </section>
  );
}

export default Blogs;
