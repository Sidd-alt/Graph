import React, { Component } from 'react';
import Login from './components/Login';
import User1 from './components/User1';
import User2 from './components/User2';
import Particles from 'react-particles-js'
import './App.css';
import 'tachyons';


  const options={
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": false,
            }
        }
    }
  }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        user1 : false,
        user2 : false,
        isLoggedIn : false
    }
  }


  handler1=(login)=>{
    this.setState({user1: login, isLoggedIn: login})
  }

  handler2=(login)=>{
    this.setState({user2: login, isLoggedIn: login})
  }

  handleLogout=()=>{
    this.setState({isLoggedIn: false, user1: false, user2: false})
  }

  render() {
    return (
      <div>
        <Particles className="particles" params={options}/>
        {this.state.isLoggedIn ? 
          this.state.user1? 
          <div>
            <button onClick={this.handleLogout} style={{float: 'right'}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib mr2">Logout</button>

            <User1 /> 
          </div>
            : 
            <div>
              <button onClick={this.handleLogout} style={{float: 'right'}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib mr2">Logout</button>

              <User2 /> 
            </div>
          : <Login handler1={this.handler1} handler2={this.handler2}/>
        }
      </div>
    );
  }
}

export default App;


