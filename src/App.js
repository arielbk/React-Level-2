import React, { Component, Fragment  } from 'react';
import './App.css';
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
import UserProvider from 'UserProvider';
import Drag from './Drag';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
        <Drag />
          <Toggle>
            {({on, toggle}) => (
              <Fragment>
                <button onClick={toggle}>Login</button>
                <Modal toggle={toggle} on={on}>
                  <h1>I am a Modal...</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

export default App;
