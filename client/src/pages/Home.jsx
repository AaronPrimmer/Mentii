import "../assets/css/home.css";
import { useQuery } from "@apollo/client";
import { useState } from "react";

import PostComponent from "../components/Posts/postComponent";
import { QUERY_POSTS } from "../utils/queries";
import CreatePostComponent from "../components/Modals/createPostComponent";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const localData = localStorage.getItem("user-info");
  const userInfo = localData ? JSON.parse(localData) : null;

  function toggleModal() {
    setIsModalOpen(true);
  }

  if (localData && !userInfo) {
    document.getElementById("createButton").addEventListener("click", (e) => {
      e.stopPropagation();
      setIsModalOpen(true);
    });
  }

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
          <p>
            Mentii is a platform designed to connect mentors and mentees,
            fostering growth and learning. Login or create an account to get
            started.
          </p>
        </div>
      ) : (
        <div>
          <div className="profiles-container">
            {mentorPosts.length !== 0 ? (
              mentorPosts.map((post, index) => (
                <PostComponent key={index} mentorPost={post} />
              ))
            ) : (
              <h3>No mentor posts available.</h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
