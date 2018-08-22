import React from 'react'
import PropTypes from 'prop-types';

// functional component, doesn't use state
const Header = props => {
  // destructure to extract props
  const { branding } = props;
  return (
    <div>
      <h1>{ branding }</h1>
    </div>
  );
};

// default properties
Header.defaultProps = {
  branding: 'My App'
};

/* -----------------------------------------
  prop type checking

  if string isn't passed, warning will 
  be thrown in the console
------------------------------------------*/
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;