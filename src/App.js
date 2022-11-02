import { useState, useEffect } from "react";
import './App.css';

const urlEndpoint = "http://localhost:4000";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [id, setId] = useState("4a571289-6d5c-4300-9614-53c6e1237d81");
  const [blog, setBlog] = useState({});


  useEffect(() => {
    const findBlog = async () => {
      const result = await fetch(`${urlEndpoint}/blogs/get-one/${id}`)
      const foundBlog = await result.json()
      console.log(foundBlog)
      setBlog(foundBlog.post)
    }
    findBlog()
  }, [id])

  // this useEffect is for the 'all' route. Its fetching the url, which is making a database request via http, waits for a promise. It comes back as await result.json() which we are setting to variable fetchedBlogs
  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await fetch(`${urlEndpoint}/blogs/all`)
      // fetchedBlogs value is coming from routes blogs
      const fetchedBlogs = await result.json()
      console.log(fetchedBlogs)
      setBlogs(fetchedBlogs.post)
    }
    fetchBlogs()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {blogs.map((blog, index) => {
          return (
            <div key={index}>
              {blog.title}
            </div>
          )
        })}

        <input type="text" onChange={(e) => { setId(e.target.value) }}></input>
        {blog.title}
      </header>
    </div>
  );
}

// suggestion, make a drop down menu with all available ids so we can pick one instread of having to copy paste from actual list

export default App;