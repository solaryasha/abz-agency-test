import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

const User = ({ content } ) => {
  const { name, email, phone, position, photo } = content;

  return (
    <div className="user">
      <img className="user__photo" src={photo} alt="user" />
      <h3 className="user__name">{name}</h3>
      <p className="user__position">{position}</p>
      <p className="user__email">{email}</p>
      <p>{phone}</p>
    </div>
  );
};

User.propTypes = {
  
};

export default User;