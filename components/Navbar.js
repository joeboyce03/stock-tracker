// components/Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">首頁</a>
      <a href="/login">登入</a>
      <a href="/watchlist">自選股</a>
    </nav>
  );
};

export default Navbar;
