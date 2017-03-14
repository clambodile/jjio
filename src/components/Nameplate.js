import React from 'react';

export default function Nameplate(props) {
  return (
    <div className="nameplate">
      <h1 >John Jacob</h1>
      <h3 className="descriptor">{props.descriptor}</h3>
    </div>
  );
}
