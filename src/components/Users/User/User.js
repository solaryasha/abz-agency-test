import React from 'react';
import PropTypes from 'prop-types';

const User = ({ content } ) => {
  const { name, email, phone, position, photo } = content;

  return (
    <div>
      <img src={photo} alt="user" />
      <h3>{name}</h3>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

User.propTypes = {
  
};

export default User;