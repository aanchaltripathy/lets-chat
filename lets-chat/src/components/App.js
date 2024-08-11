import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Chats from "./Chats";
import Login from "./Login";
import { getAuth, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

function App() {
  useEffect(() => {
    const auth = getAuth();
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          // User is signed in
          console.log('User signed in:', result.user);
        } else {
          console.log('No user signed in');
        }
      })
      .catch((error) => {
        console.error('Error during redirect result:', error);
      });
  }, []);

  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/chats" element={<Chats />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
