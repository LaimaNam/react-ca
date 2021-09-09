import React, { useState, useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { UserContext } from './../App';
import '../styles/2_utilities.css';
import '../styles/4_login.css';

const LoginScreen = () => {
  //Hooks
  //global
  const { dispatch } = useContext(UserContext);
  //local
  // -- login form local state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPasword, setLoginPasword] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  // -- sign up form local state
  const [signupName, setSignupName] = useState('');
  const [signupSurname, setSignupSurname] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupErrorMessage, setSignupErrorMessage] = useState('');

  // -- refs
  const inputRef = useRef();
  const signupPasswordInputRef = useRef();
  const signupEmailInputRef = useRef();

  // -- redirects
  const history = useHistory();

  // side effects

  //custom functions
  const loginUser = (e) => {
    e.preventDefault();
    console.log(loginEmail, loginPasword);

    axios
      .post('http://localhost:5000/api/users/login', {
        email: loginEmail,
        password: loginPasword,
      })
      .then((response) => {
        const userId = response.data.userId;
        localStorage.setItem('user', userId);
        dispatch({ type: 'LOGIN', payload: userId });
        history.push('/myaccount');
      })
      .catch((error) => {
        setLoginEmail('');
        setLoginPasword('');
        // Handle error.
        setLoginErrorMessage(error.response.data.message);
        inputRef.current.focus();
      });
  };

  const signupUser = (e) => {
    e.preventDefault();
    if (signupPassword !== signupConfirmPassword) {
      setSignupErrorMessage('Passwords do not match');
      setSignupPassword('');
      setSignupConfirmPassword('');

      signupPasswordInputRef.current.focus();

      return;
    }

    axios
      .post('http://localhost:5000/api/users/signup', {
        name: signupName,
        surname: signupSurname,
        email: signupEmail,
        password: signupPassword,
      })
      .then((response) => {
        if (response.data.registrationStatus === 'failed') {
          setSignupErrorMessage(response.data.message);
          setSignupEmail('');
          setSignupPassword('');
          setSignupConfirmPassword('');
          signupEmailInputRef.current.focus();
        } else if (response.data.registrationStatus === 'success') {
          localStorage.setItem('user', response.data.userId);
          dispatch({ type: 'REGISTER', payload: response.data.userId });
          history.push('/myaccount');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <div className="container">
        <section>
          <h1 className="headline-1">Sign up/ Log In</h1>
        </section>

        <div className="login-signup-container">
          {/* login section */}
          <section id="login" className="card-shadow">
            <h2>
              <span>Have account?</span> Log In!
            </h2>

            <form id="logInForm" className="form" onSubmit={loginUser}>
              <div className="form-control">
                <label className="form-label" htmlFor="loginEmail">
                  Email
                </label>
                <input
                  className="form-input"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  ref={inputRef}
                />
              </div>

              <div className="form-control">
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
                <input
                  className="form-input"
                  type="password"
                  value={loginPasword}
                  onChange={(e) => setLoginPasword(e.target.value)}
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="submit"
                  value="Log In"
                  className="btn-primary btn-primary-submit"
                />
              </div>
            </form>
            <p id="loginMessage" className="form-message form-message-danger">
              {loginErrorMessage}
            </p>
          </section>
          {/* sign up section */}
          <section id="signup" className="card-shadow">
            <h2>
              <span>New user?</span> Sign Up!
            </h2>

            <form id="signUpForm" className="form" onSubmit={signupUser}>
              <div className="form-control">
                <label className="form-label" htmlFor="signUpName">
                  Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  required
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="form-label" htmlFor="signUpSurname">
                  Surname
                </label>
                <input
                  className="form-input"
                  type="text"
                  required
                  value={signupSurname}
                  onChange={(e) => setSignupSurname(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="form-label" htmlFor="signUpEmail">
                  Email
                </label>
                <input
                  className="form-input"
                  type="text"
                  required
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  ref={signupEmailInputRef}
                />
              </div>

              <div className="form-control">
                <label className="form-label" htmlFor="signUpPassword">
                  Password
                </label>
                <input
                  className="form-input"
                  type="password"
                  required
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  ref={signupPasswordInputRef}
                />
              </div>

              <div className="form-control">
                <label className="form-label" htmlFor="signUpConfirmPassword">
                  Confirm Password
                </label>
                <input
                  className="form-input"
                  type="password"
                  required
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                />
              </div>

              <div className="form-control">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn-primary btn-primary-submit"
                />
              </div>
            </form>
            <p id="signUpMessage" className="form-message form-message-danger">
              {signupErrorMessage}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default LoginScreen;
