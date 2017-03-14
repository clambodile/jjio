import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(props) {
  return (
    <div className="menu">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">R&eacute;sum&eacute;</Link>
    </div>
  )
}
