import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div className="homepage">
    <div className="homepage-content">
      <h1>Learn React Native</h1>
      <p>Professional React Native Training</p>
      <div className="btn-row">
        <a className="btn" href="https://medium.com/@spencer_carli">
          Tutorials
        </a>
        <a className="btn btn-alt" href="https://learn.handlebarlabs.com">
          Courses
        </a>
        <Link className="btn" to="/m/email-list/">
          Email List
        </Link>
      </div>
      <p className="small">hello@handlebarlabs.com</p>
    </div>
  </div>
);

export default IndexPage;
