import React from 'react'

const DeleteOne = (props) => {

    const { id, blogs, setId, urlEndpoint } = props

    const handleDeleteBlog = async () => {
        const response = await fetch(`${urlEndpoint}/blogs/delete-one/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json" // This Content-Type flag is used to tell the server that our request body should be parsed as a JSON object
            },
            // body: JSON.stringify({
            //     ...blogToUpdate
            // }),
        });
    };


    return (
        <div>
            <h1>Delete One Blog</h1>

            <select value={id} onChange={(e) => { setId(e.target.value) }}>
                <option>Choose id to update from dropdown menu</option>

                {blogs.map((blog, index) => {
                    return (<option key={index}>{blog.id}</option>
                    )
                })}
            </select>
            <button onClick={() => {
                handleDeleteBlog()
            }}>Delete</button>
            <hr />
        </div>
    )
}

export default DeleteOne