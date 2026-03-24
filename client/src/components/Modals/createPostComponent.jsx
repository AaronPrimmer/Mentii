import { useMutation } from "@apollo/client";
import { CREATE_MENTOR_POST, CREATE_MENTEE_POST } from "../../utils/mutations";

const CreatePostComponent = ({ setIsModalOpen }) => {
  const userInfo = JSON.parse(localStorage.getItem("user-info"));

  const [createMentorPost] = useMutation(CREATE_MENTOR_POST, {
    onCompleted: () => {
      window.location.reload();
    },
    onError: (err) => {
      console.error("Error creating mentor post:", err);
    },
  });

  const [createMenteePost] = useMutation(CREATE_MENTEE_POST, {
    onCompleted: () => {
      window.location.reload();
    },
    onError: (err) => {
      console.error("Error creating mentee post:", err);
    },
  });

  if (!userInfo) {
    document.location.href = "/login";
  }

  const handleCreatePost = () => {
    if (userInfo.status === "mentor") {
      createMentorPost({
        variables: {
          title: document.getElementById("title").value,
          content: document.getElementById("content").value,
          username: userInfo.username,
        },
      });
    } else if (userInfo.status === "mentee") {
      createMenteePost({
        variables: {
          title: document.getElementById("title").value,
          content: document.getElementById("content").value,
          username: userInfo.username,
        },
      });
    }

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
            <input type="text" id="title" name="title" />
            <label htmlFor="content">Post:</label>
            <textarea id="content" name="content"></textarea>
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
