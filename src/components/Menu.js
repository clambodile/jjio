import React from 'react';

import Button from './Button';

export default function Menu(props) {
  return (
    <div className="menu">
      <Button route="/about" text="About"></Button>
      <Button route="/contact" text="Contact"></Button>
      <Button route="/resume" text="R&eacute;sum&eacute;"></Button>
    </div>
  )
}
