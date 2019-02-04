import React from 'react';
import { FirebaseError } from 'firebase';
import firebase, { withFirebase } from '../Firebase';
import Form from './Form';

type ComponentProps = {
  firebase: firebase;
};

type ComponentState = {
  error: string;
};

class Auth extends React.Component<ComponentProps> {
  state: ComponentState = {
    error: '',
  };

  private handleSubmit = (values: any, { setSubmitting }: any) => {
    const firebase = this.props.firebase;

    firebase
      .doCreateUserWithEmailAndPassword(values.email, values.password)
      .then((authUser: any) => {
        setSubmitting(false);
      })
      .catch((error: FirebaseError) => {
        this.setState({ error: error.message })
        setSubmitting(false);
      });
  }

  render() {
    const { error } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} submittingError={error}/>
    );
  }
}

export default withFirebase(Auth);
