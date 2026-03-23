import { useMutation } from "@apollo/client";

import { LOGOUT_USER } from "../utils/mutations";

const Logout = () => {
  const [logout] = useMutation(LOGOUT_USER);

  const handleLogout = async () => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    if (userInfo) {
      await logout({ variables: { username: userInfo.username } });
    }
    // Clear user info from localStorage to log out the user
    localStorage.removeItem("user-info");
  };

  handleLogout();
  window.location.href = "/"; // Redirect to home page after logout

  return (
    <div>
      <h1>You have been logged out.</h1>
    </div>
  );
};

export default Logout;
