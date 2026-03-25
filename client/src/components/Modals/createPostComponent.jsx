import { useMutation } from "@apollo/client";
import { CREATE_MENTOR_POST } from "../../utils/mutations";
import { useState } from "react";

const CreatePostComponent = ({ setIsModalOpen }) => {
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [createMentorPost] = useMutation(CREATE_MENTOR_POST, {
    onCompleted: () => {
      window.location.reload();
    },
    onError: (err) => {
      console.error("Error creating mentor post:", err);
    },
  });

  if (!userInfo) {
    document.location.href = "/login";
  }

  const handleCreatePost = () => {
    createMentorPost({
      variables: {
        title: title,
        content: content,
        username: userInfo.username,
      },
    });

    setIsModalOpen(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create Post</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleCreatePost();
          }}
        >
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="content">Post:</label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="button-group">
            <button type="submit">Post</button>
            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostComponent;
