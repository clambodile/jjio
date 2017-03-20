import React, { PropTypes } from 'react';

export default function Button(props) {
  
  return (
    <button className="button" onClick={props.onClick || null}>
      {props.text}
    </button>
  )
}