import classNames from 'classnames';

import React, { useState } from 'react';

export default function HamburgerMenu() {
  const [opened, setOpened] = useState(false);

  return (
    <nav>
    <div className={classNames('tham tham-e-squeeze tham-w-6', { 'tham-active': opened })} onClick={() => setOpened(!opened)}>

      <div className="tham-box">
       <ul className={classNames('menu', { 'menu-open': opened })}>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
        <div className="tham-inner">
   
          
        </div>
 
      </div>

    </div>

  </nav>
  );
}
