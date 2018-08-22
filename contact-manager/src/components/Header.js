import React from 'react'
import PropTypes from 'prop-types';
// define styles in separate css file instead
import './contact.css';

// functional component, doesn't use state
const Header = props => {
  // destructure to extract props
  const { branding } = props;
  return (
    <div>
      <h1 style={headingStyle}>{ branding }</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// styles defined as constant,
// can do this inline as
// {{color: 'red', fontSize: '42px'}}
//
const headingStyle = {
  color: 'red',
  fontSize: '42px'
}

export default Header;