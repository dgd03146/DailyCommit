import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-increase" onClick={this.handleIncrement}>
          <i class="fas fa-plus-circle"></i>
        </button>
        <button className="habit-decrease" onClick={this.handleDecrement}>
          <i class="fas fa-minus-circle"></i>
        </button>
        <button className="habit-delete" onClick={this.handleDelete}>
          <i class="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
