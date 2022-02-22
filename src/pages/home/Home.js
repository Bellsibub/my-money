// components
import TransactionList from 'components/TransactionList';
import TransactionForm from 'components/TransactionForm';

// styles
import styles from './Home.module.css';


const Home = () => {
  return (
    <div className={styles.container}>
      <TransactionList />
      <TransactionForm />
    </div>
  );
};

export default Home;
