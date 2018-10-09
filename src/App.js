import React, { Component, Fragment  } from 'react';
import { Transition } from 'react-spring';
import './App.css';
import { Toggle } from 'Utilities';
import { Modal, Card } from 'Elements';
import User from './User';
import UserProvider from 'UserProvider';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <User />
          <Toggle>
            {({on, toggle}) => (
              <Fragment>
                <button onClick={toggle}>Show / Hide</button>
                <Transition
                  from={{ opacity: 0, bg: '#82d8d8', height: '0px' }}
                  enter={{ opacity: 1, bg: '#524763', height: '200px' }}
                  leave={{ opacity: 0, bg: '#82d8d8', height: '0px' }}
                >
                      {on && Header}
                </Transition>
              </Fragment>
            )}
          </Toggle>
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

const Header = styles => (
  <Card style={{
    opacity: Math.floor(styles.opacity * 100) / 100,
    background: styles.bg,
    overflow: 'hidden',
    height: styles.height
    }}>
    <h1>Show Me</h1>
    <h3>{styles.bg}</h3>
  </Card>
)

export default App;
