import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PrivateRoute from './components/ProtectedRoute';
import AppBar from './components/AppBar.js'; 
import SecretOne from './pages/SecretOne';
import SecretTwo from './pages/SecretTwo';
import Login from './pages/Login';
import Home from './pages/Home'; 

function App(props) {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const isVerifying = useSelector((state) => state.auth.isVerifying);
	return (
    <>
      <AppBar/>
      <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/secret-one" component={SecretOne} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
          <PrivateRoute exact path="/secret-two" component={SecretTwo} isAuthenticated={isAuthenticated} isVerifying={isVerifying} />
          <Route path="/" component={Home} />
      </Switch>
    </>
	);
}

export default App;
