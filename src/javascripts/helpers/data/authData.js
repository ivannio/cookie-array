import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#stock').removeClass('hide');
      $('#navbar-button-logout').removeClass('hide');
      $('#auth').addClass('hide');
    } else {
      $('#stock').addClass('hide');
      $('#navbar-button-logout').addClass('hide');
      $('#auth').removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
