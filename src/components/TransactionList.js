// hooks
import { useSnapshotDB } from 'hooks/useSnapshotDB';
import { useDB } from 'hooks/useDB';
import { useAuth } from 'hooks/useAuth';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
// components
import Spinner from './Spinner';
// styles
import styles from './TransactionList.module.css';

const TransactionList = () => {
  const { user } = useAuth();
  const { deleteDocument } = useDB('transactions');
  const { documents, error, loading } = useSnapshotDB(
    'transactions',
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
  );

  return (
    <ul className={styles.container}>
      {error && <p>{error}</p>}
      {loading && <Spinner text="Fetching transactions..." contained />}
      {documents &&
        documents.map((doc) => (
          <li key={doc.id} className={styles.item}>
            <p className={styles.name}>{doc.name}</p>
            <p className={styles.price}>{doc.price} sek</p>
            <button
              className={styles.action}
              onClick={() => deleteDocument(doc.id)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TransactionList;
