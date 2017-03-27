import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default function Button(props) {
  
  return (
    <Link to={props.route}>
      <button className="button" >
        {props.text}
      </button>
    </Link>
  )
}
