import { useState } from 'react';

// hooks
import { useLogin } from 'hooks/useLogin';

// styles
import form from 'globals/Form.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, loading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className={form.container} onSubmit={handleSubmit}>
      <h2>Login</h2>
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
          Login
        </button>
      )}
      {error && <p className={form.error}>{error}</p>}
    </form>
  );
};

export default Login;
