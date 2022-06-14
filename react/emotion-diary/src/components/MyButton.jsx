import styles from './MyButton.module.css';

const MyButton = ({ text, type, onClick }) => {
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <button
      className={`${styles.MyButton} ${styles[`${btnType}`]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: 'default'
};

export default MyButton;
