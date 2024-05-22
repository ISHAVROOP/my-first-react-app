import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} navbar-custom`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        {/* Toggle Switch */}
        <div className="custom-switch-container">
          <input
            onChange={props.togglemode}
            className="custom-switch-input"
            type="checkbox"
            id="customSwitch"
          />
          <label className="custom-switch-label" htmlFor="customSwitch">
            <span className="custom-switch-inner"></span>
            <span className="custom-switch-switch"></span>
          </label>
        </div>
        {/* End of Toggle Switch */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.l1}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.l2}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.l3}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  l1: PropTypes.string,
  l2: PropTypes.string,
  l3: PropTypes.string,
  l4: PropTypes.string,
  mode: PropTypes.string.isRequired,
  togglemode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: 'Default Title',
  l1: 'Link 1',
  l2: 'Link 2',
  l3: 'Link 3',
  l4: 'Link 4',
};

export default Navbar;
