import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: EmailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.trim() !== "" && re.test(value));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmissonHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    // nameInputRef.current.value = "";
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = EmailInputHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissonHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {EmailInputHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
