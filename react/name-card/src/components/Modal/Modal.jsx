import React from 'react';
import ReactDom from 'react-dom';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import styles from './Modal.module.css';

const Backdrop = ({ onHide }) => {
  return <div className={styles.backdrop} onClick={onHide} />;
};

const ModalOverlay = ({ onHide, isValid, title, message }) => {
  return (
    <Card className={styles.modal} onClick={onHide}>
      <header className={`${styles.header} ${isValid && styles.block}`}>
        <h2 className={styles.error}>{title}</h2>
      </header>
      <div className={styles.content}>{message}</div>
      <footer className={styles.actions}>
        <Button onClick={onHide}>Okay</Button>
      </footer>
    </Card>
  );
};

const Modal = ({ isValid, onHide, title, message }) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onHide={onHide} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          onHide={onHide}
          isValid={isValid}
          title={title}
          message={message}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default Modal;
