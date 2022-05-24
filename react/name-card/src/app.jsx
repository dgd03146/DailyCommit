import './App.css';
import { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import Users from './components/Users/Users';
import Modal from './components/Modal/Modal';
import Wrapper from './components/Helpers/Wrapper';

function App() {
  const [inputs, setInputs] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState();

  const addUser = (name, age) => {
    setInputs(prevState => [...prevState, { id: Date.now(), name, age }]);
  };

  const showModal = () => {
    setIsValid(true);
  };

  const hideModal = () => {
    setIsValid(false);
  };

  const showMessage = (message, title) => {
    setModal({ message, title });
  };

  return (
    <>
      <AddUser onAdd={addUser} onShow={showModal} onMessage={showMessage} />
      {isValid && (
        <Modal
          isValid={isValid}
          onHide={hideModal}
          title={modal.title}
          message={modal.message}
        />
      )}
      {!isValid && inputs.length > 0 && <Users inputs={inputs} />}
    </>
  );
}

export default App;
