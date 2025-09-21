import React, { useState } from "react";

const BlogPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postStore, setPostStore] = useState([]);

  const handlePost = () => {
    console.log("dfjsdfgj");

    if (title.trim() === "" || description.trim() === "") {
      return alert("both input is requ..");
    }
    const newpost = {
      id: Date.now(),
      title,
      description,
    };

    setPostStore([...postStore, newpost]);
    setTitle("");
    setDescription("");
  };

  const handleDeletePost = (id) => {
    setPostStore(postStore.filter((post) => post.id !== id));
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <textarea
            type="text"
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br />
        <br />
        <button onClick={handlePost}>Create Post</button>
      </div>

      <div>
        {postStore.length === 0 ? (
          <div>
            <h2>{"title"}</h2>
            <p>{"description"}</p>
            <button>Delete</button>
          </div>
        ) : (
          postStore.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogPost;
