import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

import Login from "auth";
import ChatBotty from "components/ChatBotty";

import "./App.css";

function App() {
  const { isAuthenticated, isLoading, logout } = useAuth0();

  return (
    <div className="app-container">
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : isAuthenticated ? (
        <ChatBotty logout={logout} />
      ) : (
        <Login isLoading={isLoading} />
      )}
    </div>
  );
}

export default App;
