import * as firebase from 'firebase/app';
import 'firebase/auth';
import { config } from '../../helpers/firebaseHelper';

class Firebase {
  auth: firebase.auth.Auth;

  constructor() {
    firebase.initializeApp(config);

    this.auth = firebase.auth();
  }

  doCreateUserWithEmailAndPassword = (email: string, password: string) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  doSignInWithEmailAndPassword = (email: string, password: string) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => this.auth.signOut();
}

export default Firebase;
