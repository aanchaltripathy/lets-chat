import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { auth, googleProvider, facebookProvider, signInWithRedirect } from "../firebase";

const Login = () => {
  const handleGoogleSignIn = () => {
    signInWithRedirect(auth, googleProvider);
  };

  const handleFacebookSignIn = () => {
    signInWithRedirect(auth, facebookProvider);
  };

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Lets-Chat!</h2>
        <div
          className="login-button google"
          onClick={handleGoogleSignIn}
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <br /> <br />
        <div
          className="login-button facebook"
          onClick={handleFacebookSignIn}
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4>Aanchal Tripathy💝</h4>
      </div>
    </div>
  );
};

export default Login;
