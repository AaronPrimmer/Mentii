const PostComponent = ({ mentorPost }) => {
  const { title, content, author } = mentorPost;

  return (
    <>
      <div className="post-card">
        <div className="author-title">
          <span>{author.title}</span>
        </div>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="author-info">
          <span>
            <strong>{author.username}</strong>
          </span>
          {author.status === "mentor" ? (
            <span className="author-title-mentor">Mentor</span>
          ) : (
            <span className="author-title-mentee">Mentee</span>
          )}
          <div>
            <span className="skill-sets">
              {author.skills.map((skill, index) => (
                <div key={index} className="skills">
                  {skill}
                </div>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostComponent;
