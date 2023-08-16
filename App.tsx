import React from "react";
import { useSelector } from "react-redux";
import Signup from "./components/Signup";
import { selectToken, selectUser } from "./features/auth/authSlice";
import Signin from "./components/Signin";
const App: React.FC = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  return (
    <div>
      {token ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          {/* Display user-specific content */}
        </div>
      ) : (
        <div>
          <Signup />
          <Signin />
        </div>
      )}
    </div>
  );
};

export default App;
