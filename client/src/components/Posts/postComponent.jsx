const PostComponent = ({ mentorPost }) => {
  const { title, content, author } = mentorPost;

  return (
    <>
      <div className="post-card">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="author-info">
          <p>
            <strong>Author:</strong> {author.username}
          </p>
          <p>
            <strong>Status:</strong> {author.status}
          </p>
          <p>
            <strong>Skills:</strong> {author.skills.join(", ")}
          </p>
        </div>
      </div>
    </>
  );
};

export default PostComponent;
