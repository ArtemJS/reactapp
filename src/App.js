import React, { Component } from 'react';

import './App.css';
import Form from './_authForm/authForm';
import UserProfile from './_avatar/avatar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            photoUrl: null
        }
    }
  render() {
    const {name, photoUrl} = this.state
    return (
        <div>
          <div className="wrapper">
          </div>
          <div className="content">
            <div className="content__logo"></div>
              <div className="content__box" >
                  {!name && <Form callback={({name, photoUrl}) => {
                      this.setState({name,photoUrl})
                  }
              } />}
              {name && <UserProfile name={name} photoUrl={photoUrl} callback={({name,photoUrl}) => {
                  this.setState({name, photoUrl})
              }
              }  />}
              </div>
          </div>
        </div>
    );
  }
}
export default App;