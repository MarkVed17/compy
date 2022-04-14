import React from "react";
import { Link } from "react-router-dom";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="main-content">
      <div className="hero-text">
        <h1 className="hero-title">A note-taking app,</h1>
        <h3 className="hero-subtitle">small, but effective just like <a href="https://jurassicpark.fandom.com/wiki/Compsognathus" className="compies-text" target="_blank">Compies</a></h3>
        <Link to="/signup" className="hero-link">
          Get Started
        </Link>
        <Link to="/signin" className="login-link">
          Already have an account? Log in
        </Link>
      </div>
      <img src="/assets/Hero/Notes-bro.svg" alt="Hero" className="hero-img" />
    </div>
  );
};

export { HomeScreen };
