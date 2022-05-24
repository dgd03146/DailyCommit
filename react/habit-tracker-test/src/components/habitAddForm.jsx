import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  onSubmit = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="habit-input"
          ref={this.inputRef}
          type="text"
          placeholder="habit"
        />
        <button>Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
