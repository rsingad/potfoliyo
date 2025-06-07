import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container text-center">
        <h4 className="mb-4 fw-semibold">Connect with GitHub</h4>

        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
          <a href="https://desirable-mindfulness-production.up.railway.app/auth/github" className="btn btn-outline-success d-flex align-items-center gap-2 px-4 py-2">
            <FaGithub size={20} /> Sign Up with GitHub
          </a>
          <a  href="https://desirable-mindfulness-production.up.railway.app/auth/github" className="btn btn-outline-primary d-flex align-items-center gap-2 px-4 py-2">
            <FaGithub size={20} /> Log In with GitHub
          </a>
        </div>

        <hr className="border-secondary" />

        <p className="text-muted mb-0">
          &copy; {new Date().getFullYear()} <strong>Your Portfolio</strong> &mdash; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
