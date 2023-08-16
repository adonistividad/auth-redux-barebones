import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../features/auth/authActions";

const Signin: React.FC = () => {
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSignin = () => {
    dispatch(signin(formData));
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleSignin}>Sign In</button>
    </div>
  );
};

export default Signin;
