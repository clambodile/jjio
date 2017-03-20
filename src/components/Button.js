import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default function Button(props) {
  
  return (
    <Link to={props.route}>
      <button className="button" onClick={props.onClick || null}>
        {props.text}
      </button>
    </Link>
  )
}
