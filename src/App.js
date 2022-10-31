import { useState, useEffect } from "react";
import "./App.css";
const urlEndpoint = "http://localhost:4000";


function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await fetch(`${urlEndpoint}/blogs/all`);
      const fetchedBlogs = await result.json();
      console.log(fetchedBlogs);
      setBlogs([fetchedBlogs]);

    };
    fetchBlogs();
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        {blogs.map((blog) => {
          return (
            <div>
              {blog.title}
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;