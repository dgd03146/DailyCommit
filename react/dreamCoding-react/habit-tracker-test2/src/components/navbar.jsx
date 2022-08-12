import React from 'react';

const Navbar = ({ totalCount }) => {
  return (
    <nav className="navbar">
      <span>Habit</span>
      <span className="habit-count">{totalCount}</span>
    </nav>
  );
};

export default Navbar;
