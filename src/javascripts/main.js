import 'bootstrap';
import '../styles/main.scss';
import firebase from 'firebase';
import apiKeys from './helpers/apiKeys.json';
import loginButton from './components/auth/auth';
import authData from './helpers/data/authData';
import logout from './components/myNavBar/myNavBar';
import machine from './components/machine/machine';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  loginButton.loadLoginButton();
  logout.logoutEvent();
  machine.buildTheMachine();
};

init();
