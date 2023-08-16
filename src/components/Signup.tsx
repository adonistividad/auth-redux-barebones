import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { signup } from '../features/auth/authActions';

const Signup: React.FC = () => {
  const dispatch:any = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSignup = () => {
    dispatch(signup(formData));
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
