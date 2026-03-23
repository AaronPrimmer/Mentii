import "../assets/css/home.css";
import { useQuery } from "@apollo/client";

import PostComponent from "../components/Posts/postComponent";
import { QUERY_POSTS } from "../utils/queries";

const Home = () => {
  const localData = localStorage.getItem("user-info");
  const userInfo = localData ? JSON.parse(localData) : null;

  const { loading, data } = useQuery(QUERY_POSTS);

  if (loading) return <p>Loading...</p>;

  const mentorPosts = data?.mentorPosts || [];

  return (
    <div className="home-main-container">
      {!userInfo ? (
        <div className="welcome-container">
          <h1>Welcome to Mentii!</h1>
          <p>
            Find your perfect mentor or mentee and start your journey today!
          </p>
        </div>
      ) : (
        <div className="profiles-container">
          {mentorPosts.map((post, index) => (
            <PostComponent key={index} mentorPost={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
