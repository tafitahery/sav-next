import React, { useState } from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <NavBar isHidden={isHidden} setIsHidden={setIsHidden} />
      <Sidebar isHidden={isHidden} />
      {children}
    </div>
  );
}
