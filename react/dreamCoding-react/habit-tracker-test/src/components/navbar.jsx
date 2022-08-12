import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <nav>
        <span>Habit tracker</span>
        <span>{this.props.count}</span>
      </nav>
    );
  }
}

export default Navbar;
