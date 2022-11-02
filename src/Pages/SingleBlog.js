import React from 'react'

const SingleBlog = ({ id, blogs, setId, blog }) => {
    // const {id, blogs, setId, blog} = props;

    return (
        <div>
            <h1>Single Blog</h1>
            <label>Enter id number below</label>
            <input type="text" value={id} onChange={(e) => { setId(e.target.value) }}></input>
            {/* code below is rendering the results we get from either of our onChange functions */}
            <br />
            <br />
            <label>Selected Single Blog Below</label>
            <h1>{blog.title}</h1>


            {/* {/*  code for drop down menu below */}
            <select value={id} onChange={(e) => { setId(e.target.value) }}>

                <option>Choose id from dropdown menu</option>
                {/* mapping through blogs (contains all of our data) and returning an option with a key and the id number of each individual blog */}
                {blogs.map((blog, index) => {
                    return (<option key={index}>{blog.id}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default SingleBlog 