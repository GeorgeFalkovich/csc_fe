import React from "react";
import { Link, Redirect } from "react-router-dom";
import { cinnect, connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Cloud Specialists Connector</h1>
          <p className="lead">
            Create a cloud specialist profile/portfolio, share posts and get
            help from other specialists
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
            <div id="footer">
              <p>Created by George Falkovich 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
