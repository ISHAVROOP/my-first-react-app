import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} navbar-custom`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        {/* Toggle Switch */}
      
        {/* End of Toggle Switch */}

        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <div className="custom-switch-container">
  <input
    onChange={props.togglemode}
    className="custom-switch-input"
    type="checkbox"
    id="customSwitch"
  />
  <label className="custom-switch-label" htmlFor="customSwitch">
    <span className="custom-switch-inner">
      <i className="fa fa-sun"></i>
    </span>
    <span className="custom-switch-switch">
      <i className="fa fa-moon"></i>
    </span>
  </label>
</div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string.isRequired,
  togglemode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: 'Default Title',
};

export default Navbar;