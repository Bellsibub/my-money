import { BrowserRouter as Router, Switch } from 'react-router-dom';

// hooks
import { useAuth } from 'hooks/useAuth';

// pages
import { ProtectedRoute, UnprotectedRoute } from 'pages/RouteGuard';
import Home from 'pages/home/Home';
import Login from 'pages/login/Login';
import Signup from 'pages/signup/Signup';

// components
import Navbar from 'components/Navbar';
import Spinner from 'components/Spinner';

function App() {
  const { authIsReady } = useAuth();

  return (
    <Router>
      <div className="App">
        {authIsReady ? (
          <>
            <Navbar />
            <Switch>
              <ProtectedRoute exact path="/" component={<Home />} />
              <UnprotectedRoute path="/login" component={<Login />} />
              <UnprotectedRoute path="/signup" component={<Signup />} />
            </Switch>
          </>
        ) : (
          <Spinner text="Loading services..." />
        )}
      </div>
    </Router>
  );
}

export default App;
