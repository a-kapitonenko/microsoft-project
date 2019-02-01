import React, { Component } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Form from './components/Auth/Form';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <Modal
        trigger={<Button>Show Modal</Button>}
        centered={false}
        basic
        size="tiny"
        closeIcon
      >
        <Modal.Header style={{ paddingBottom: 10 }}>
          <a className="text">
            login
          </a>
        </Modal.Header>
        <Modal.Content style={{ backgroundColor: 'white' }}>
          <Form />
        </Modal.Content>
        <Modal.Actions>
          <Button color='red'>
            <Icon name='remove' /> No
          </Button>
          <Button color='green'>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default App;
