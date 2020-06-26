import React from 'react';
import PropTypes from 'prop-types';

const User = () => {
  return (
    <div>
      <img src="../../assets/photo-cover.png" alt="user" />
      <h3>Elizabeth</h3>
      <p>Frontend developer</p>
      <p>email</p>
      <p>phone</p>
    </div>
  );
};

User.propTypes = {
  
};

export default User;