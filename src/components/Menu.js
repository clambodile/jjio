import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

export default function Menu(props) {
  return (
    <div className="menu">
      <Link to="/about"><Button text="About"></Button></Link>
      <Link to="/contact"><Button text="Contact"></Button></Link>
      <Link to="/resume"><Button text="R&eacute;sum&eacute;"></Button></Link>
    </div>
  )
}
