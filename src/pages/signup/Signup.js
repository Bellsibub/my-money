import { useState } from 'react';

// hooks
import { useSignup } from 'hooks/useSignup';

// styles
import form from 'globals/Form.module.css';

const Signup = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { error, loading, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form className={form.container} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>Username:</span>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      {loading ? (
        <button className={form.btn} disabled>
          Loading...
        </button>
      ) : (
        <button className={form.btn} type="submit">
          Signup
        </button>
      )}
      {error && <p className={form.error}>{error}</p>}
    </form>
  );
};

export default Signup;
