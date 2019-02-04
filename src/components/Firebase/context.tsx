import React from 'react';
import firebase from './firebase';

const FirebaseContext = React.createContext({} as firebase);

export const withFirebase = (Component: any) => (props: any) => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
