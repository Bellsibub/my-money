// styles
import styles from './Spinner.module.css';

const Spinner = ({ text, contained }) => {
  return (
    <div className={`${contained ? styles.contained : styles.overlay}`}>
      <div className={styles.container}>
        <div className={styles.text}>{text}</div>
        <div className={styles.spinner}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
