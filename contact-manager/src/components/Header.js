import React from 'react'

// functional component, doesn't use state
const Header = props => {
  // destructure to extract props
  const { branding } = props;
  return (
    <div>
      <h1>{ branding }</h1>
    </div>
  );
}

export default Header;