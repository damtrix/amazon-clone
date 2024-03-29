import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

import './Login.css';

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    //firebase login

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        //Successfully sign in user with email and password
        if (auth) {
          history('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    //firebase register

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        //Successfully created a user with email and password
        if (auth) {
          history('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Login"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit">
            Sign In
          </button>
        </form>

        <p>
          By sigining-in you agree to Amazon FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest_Based Ads Notice.
        </p>

        <button
          className="login__registerButton"
          onClick={register}
          type="submit">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
