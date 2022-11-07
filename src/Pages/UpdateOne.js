import React, { useState, useEffect } from 'react'


const UpdateOne = (props) => {
    const { urlEndpoint, blogs } = props

    const [id, setId] = useState("");
    const [blogToUpdate, setBlogToUpdate] = useState({});

    useEffect(() => {
        const fetchBlogToUpdate = async () => {
            const result = await fetch(`${urlEndpoint}/blogs/update-one/${id}`)
            const fetchedBlogToUpdate = await result.json()
            setBlogToUpdate(fetchedBlogToUpdate.post)
        }
        fetchBlogToUpdate()
    }, [id])

    const handleUpdateBlog = async () => {
        const response = await fetch(`${urlEndpoint}/blogs/updated-one/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // This Content-Type flag is used to tell the server that our request body should be parsed as a JSON object
            },
            body: JSON.stringify({
                ...blogToUpdate
            }),
        });
    };

    return (
        <div>

            <h1>Update one</h1>
            <label>Title</label>
            <input value={blogToUpdate.title} type="text" onChange={(e) => {
                // setTitle(e.target.value)
                const blogToUpdateCopy = {
                    ...blogToUpdate, title: e.target.value
                }
                setBlogToUpdate(blogToUpdateCopy)
            }} />
            <br />
            <label>Author</label>
            <input value={blogToUpdate.author} type="text" onChange={(e) => {
                // setAuthor(e.target.value)
                const blogToUpdateCopy = {
                    ...blogToUpdate, author: e.target.value
                }
                setBlogToUpdate(blogToUpdateCopy)
            }} />
            <br />
            <label>Text</label>
            <textarea value={blogToUpdate.text} onChange={(e) => {
                // setText(e.target.value)
                const blogToUpdateCopy = {
                    ...blogToUpdate, text: e.target.value
                }
                setBlogToUpdate(blogToUpdateCopy)
            }} />


            <select value={id} onChange={(e) => { setId(e.target.value) }}>
                <option>Choose id to update from dropdown menu</option>
                {/* mapping through blogs (contains all of our data) and returning an option with a key and the id number of each individual blog */}
                {blogs.map((blog, index) => {
                    return (<option key={index}>{blog.id}</option>
                    )
                })}
            </select>
            <button onClick={() => {
                handleUpdateBlog()
            }}>Update</button>
            <hr />
        </div>

    )
}

export default UpdateOne;