// import React from 'react';
// import './Blogs.css'; // Import a CSS file for styling

// function Blogs() {
//   // Define an array of blog objects
//   const blogsData = [
//     {
//       name: 'Titanic passenger classification',
//       description: 'Term project',
//       filename: 'titanic_data.html',
//       folder: 'titanic_blog'
//     },
//     {
//       name: 'Flower classifier',
//       description: 'Assignment-1',
//       filename: 'flower_classification.html',
//       folder: 'flower_classification_blog'
//     },
//     // Add more blog objects as needed
//   ];

//   // Function to open a blog in a new tab
//   const openBlogInNewTab = (filename, foldername) => {
//     const blogUrl = `${process.env.PUBLIC_URL}/${foldername}/${filename}.html`;
//     window.open(blogUrl, '_blank');
//   };

//   return (
//     <section id="blogs">
//       <h2>Blogs</h2>
//       {blogsData.map((blog, index) => (
//         <div key={index} className="blog-card">
//           <h3>{blog.name}</h3>
//           <p>{blog.description}</p>
//           <a className="shared-link" href={blog.url} target="_blank" rel="noopener noreferrer">
//             View jupyter Notebook
//           </a>
//           <button onClick={() => openBlogInNewTab(blog.filename, blog.folder)}>
//             View Blog
//           </button>
//         </div>
//       ))}
//       {/* Add more blog cards as needed */}
//     </section>
//   );
// }

// export default Blogs;


import React from 'react';
import './Blogs.css'; // Import a CSS file for styling

function Blogs() {
  // Define an array of blog objects
  const blogsData = [
    {
      name: 'Titanic passenger classification',
      description: 'Term project',
      filename: 'titanic_data.html',
      folder: 'titanic_blog',
      url: 'https://github.com/venkatesh010196/classification_titanicdata/blob/main/classification.ipynb' 
    },
    {
      name: 'Flower classifier',
      description: 'Assignment-1',
      filename: 'flower_classification.html',
      folder: 'flower_classification_blog',
      url: 'https://github.com/venkatesh010196/Flower-classification-assignment' 
    },
    {
      name: 'naive-bayes classifier to detect essay generation(ai vs human)',
      description: 'Assignment-2',
      filename: 'naive_classifier.html',
      folder: 'naive_classifier_blog',
      url: 'https://github.com/venkatesh010196/naive-bayes-classifier' 
    }
    // Add more blog objects as needed
  ];

  function handleOpenBlog(blog) {
    openBlogInNewTab(blog.filename, blog.folder);
  }

  // Function to open a blog in a new tab
  const openBlogInNewTab = (filename, foldername) => {
    
    const blogUrl = `${process.env.PUBLIC_URL}/${foldername}/${filename}`; 
    console.log(blogUrl);
    // process.env.PUBLIC_URL + `/`+{foldername}+`/`+{filename}+`.html`;
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
          <button onClick={() => handleOpenBlog(blog)}>
            View Blog
          </button>
        </div>
      ))}
      {/* Add more blog cards as needed */}
    </section>
  );
}

export default Blogs;
