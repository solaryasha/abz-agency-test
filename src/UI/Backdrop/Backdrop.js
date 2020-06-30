import React from 'react';
import './Backdrop.scss';

export const Backdrop = ({ onClick }) => (
  <div className="backdrop" onClick={() => onClick()}/>
);
