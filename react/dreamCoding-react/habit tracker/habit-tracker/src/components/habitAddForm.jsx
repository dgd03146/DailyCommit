import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  inputRef = React.createRef(); // Ref라는 오브젝트 생성됨
  formRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault(); // 브라우져 기본 기능 취소. submit하면 페이지 리프레쉬됨
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    //this.inputRef.current.value = "";
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="habit-add" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          className="habit-input"
          type="text"
          placeholder="Habit"
        />
        {/* 컴포넌트가 브라우저에 표기가 되면 input이라는 요소가 inputRef와
        연결이 된다. */}
        <button className="habit-addBtn">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
