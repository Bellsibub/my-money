import { useEffect, useState } from 'react';

// hooks
import { useDB } from 'hooks/useDB';

// styles
import styles from './TransactionForm.module.css';

const TransactionForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(null);
  const { addDocument, response } = useDB('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ name: itemName, price: itemPrice });
  };

  useEffect(() => {
    if (response.success) {
      setItemName('');
      setItemPrice('');
    }
    if (response.loading) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    if (response.error) {
      setError(response.error);
    } else {
      setError(null);
    }
  }, [response.success, response.loading, response.error]);

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h3 className={styles.title}>Add a transaction</h3>
      <div className={styles.content}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            required
            value={itemName}
            disabled={disabled}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <label>
          <span>Price (sek):</span>
          <input
            type="number"
            required
            value={itemPrice}
            disabled={disabled}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </label>
        <button className={styles.btn} type="submit" disabled={disabled}>
          Add transaction
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </form>
  );
};

export default TransactionForm;
