import React from "react";
import "./NotFoundPage.css";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-text">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className="notfound-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
