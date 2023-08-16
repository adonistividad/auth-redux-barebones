import React from "react";
import { useSelector } from "react-redux";
import Signup from "./components/auth/Signup";
import { selectToken, selectUser } from "./features/auth/authSlice";
import Signin from "./components/auth/Signin";
import OtpVerification from "./components/auth/OtpVerification";
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
          <OtpVerification />
        </div>
      )}
    </div>
  );
};

export default App;
